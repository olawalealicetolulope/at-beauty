"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Card, CardContent, Grid, Typography, } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import LoopIcon from "@mui/icons-material/Loop";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, } from "recharts";
import { collection, getDocs, query, where, getCountFromServer, } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const StatCard = ({ title, value, icon, link }) => (
  <Link href={link}>
    <Card
      sx={{
        minWidth: 200,
        p: 2,
        bgcolor: "#0e132a",
        color: "#fff",
        cursor: "pointer",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          {icon}
          <Typography variant="h4" fontWeight="bold">
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </Link>
);

const DashboardPage = () => {
  const [stats, setStats] = useState({
    revenue: 0,
    users: 0,
    booked: 0,
    completed: 0,
    pending: 0,
    inProgress: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const usersSnap = await getCountFromServer(collection(db, "users"));
      const users = usersSnap.data().count;

      const sessionColl = collection(db, "BookSession");
      const bookedSnap = await getCountFromServer(sessionColl);
      const booked = bookedSnap.data().count;

      const qCompleted = query(sessionColl, where("status", "==", "completed"));
      const qPending = query(sessionColl, where("status", "==", "pending"));
      const qInProgress = query(sessionColl, where("status", "==", "in-progress"));

      const [completedSnap, pendingSnap, inProgressSnap] = await Promise.all([
        getCountFromServer(qCompleted),
        getCountFromServer(qPending),
        getCountFromServer(qInProgress),
      ]);

      const completed = completedSnap.data().count;
      const pending = pendingSnap.data().count;
      const inProgress = inProgressSnap.data().count;

      const allpayment = await getDocs(sessionColl);

      let revenue = 0;
      allpayment.forEach((doc) => {
        const data = doc.data();
        const price = parseFloat(data?.price);

        if (!isNaN(price)) {
          revenue += price;
        }
      });


      setStats({
        users,
        booked,
        completed,
        pending,
        inProgress,
        revenue,
      });
      setLoading(false);
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-orange-300 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-orange-500 font-semibold">Loading dashboard...</span>
        </div>
    );
  }

  const chartData = [
    { name: "Booked", value: stats.booked, fill: "#FFA500" },
    { name: "Completed", value: stats.completed, fill: "#4CAF50" },
    { name: "Pending", value: stats.pending, fill: "#F44336" },
    { name: "In Progress", value: stats.inProgress, fill: "#9C27B0" },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Total Revenue"
            value={`₦${stats.revenue.toLocaleString()}`}
            icon={<AttachMoneyIcon sx={{ color: "green", fontSize: 28 }} />}
            link="/admin/revenue"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Registered Users"
            value={stats.users}
            icon={<GroupIcon sx={{ color: "blue", fontSize: 28 }} />}
            link="/admin/users"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Appointments Booked"
            value={stats.booked}
            icon={<EventNoteIcon sx={{ color: "orange", fontSize: 28 }} />}
            link="/admin/appointments"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Appointments Completed"
            value={stats.completed}
            icon={<CheckCircleIcon sx={{ color: "green", fontSize: 28 }} />}
            link="/admin/appointments?status=completed"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Appointments Pending"
            value={stats.pending}
            icon={<PendingIcon sx={{ color: "red", fontSize: 28 }} />}
            link="/admin/appointments?status=pending"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Appointments In Progress"
            value={stats.inProgress}
            icon={<LoopIcon sx={{ color: "purple", fontSize: 28 }} />}
            link="/admin/appointments?status=in-progress"
          />
        </Grid>
      </Grid>

      {/* Bar Chart Section */}
      <Box mt={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Appointment Overview
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default DashboardPage;
