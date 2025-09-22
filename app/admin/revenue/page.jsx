"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import {
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import LoopIcon from "@mui/icons-material/Loop";
import { db } from "@/lib/firebaseConfig";

const RevenueCard = ({ title, value, icon }) => (
  <Card
    sx={{
      minWidth: 200,
      bgcolor: "#0e132a",
      color: "#fff",
      transition: "transform 0.2s",
      "&:hover": { transform: "scale(1.03)" },
    }}
  >
    <CardContent>
      <Box display="flex" alignItems="center" gap={2}>
        {icon}
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h5" fontWeight="bold">
            ₦{value.toLocaleString()}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const RevenuePage = () => {
  const [completedRevenue, setCompletedRevenue] = useState(0);
  const [pendingRevenue, setPendingRevenue] = useState(0);
  const [inProgressRevenue, setInProgressRevenue] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🔄 Send pending revenue to backend
  const sendPendingRevenue = async (total) => {
    try {
      const res = await fetch("/api/send-pending-revenue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pendingTotal: total }),
      });

      if (!res.ok) {
        throw new Error("Failed to send pending revenue");
      }

      console.log("✅ Sent pending revenue successfully");
    } catch (err) {
      console.error("❌ Error sending pending revenue:", err.message);
    }
  };

  useEffect(() => {
    const sessionRef = collection(db, "BookSession");

    const unsubscribe = onSnapshot(query(sessionRef), (snapshot) => {
      let completed = 0;
      let pending = 0;
      let inProgress = 0;

      snapshot.forEach((doc) => {
        const data = doc.data();
        const price = typeof data.price === "number" ? data.price : 0;

        if (data.status === "completed") {
          completed += price;
        } else if (data.status === "pending") {
          pending += price;
        } else if (data.status === "in-progress") {
          inProgress += price;
        }
      });

      setCompletedRevenue(completed);
      setPendingRevenue(pending);
      setInProgressRevenue(inProgress);
      sendPendingRevenue(pending); // 🔄 Auto-send to backend
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={8}>
        <CircularProgress color="warning" />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Revenue Summary
      </Typography>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={6} md={4}>
          <RevenueCard
            title="Completed Revenue"
            value={completedRevenue}
            icon={<CheckCircleIcon sx={{ fontSize: 40, color: "green" }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RevenueCard
            title="Pending Revenue"
            value={pendingRevenue}
            icon={<PendingIcon sx={{ fontSize: 40, color: "orange" }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RevenueCard
            title="In Progress Revenue"
            value={inProgressRevenue}
            icon={<LoopIcon sx={{ fontSize: 40, color: "purple" }} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RevenuePage;
