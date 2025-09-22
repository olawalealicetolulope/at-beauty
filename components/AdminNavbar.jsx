"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {AppBar,Toolbar,IconButton,Typography,Drawer,List,ListItem,ListItemIcon,ListItemText,Avatar,Box,Divider,useTheme,useMediaQuery,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ContactsIcon from "@mui/icons-material/Contacts";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: <DashboardIcon /> },
  { label: "Appointments", href: "/admin/appointments", icon: <CalendarTodayIcon /> },
  { label: "Contacts", href: "/admin/contact", icon: <ContactsIcon /> },
  { label: "Users", href: "/admin/users", icon: <PeopleIcon /> },
  { label: "Settings", href: "/admin/settings", icon: <SettingsIcon /> },
];

const AdminNavbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggle = (open) => () => setDrawerOpen(open);

  const handleLogout = () => {
    setDrawerOpen(false); 
    signOut({ callbackUrl: "/auth/signin", redirect: true });
  };

  const NavLinks = () =>
    navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <Link key={item.href} href={item.href} passHref>
          <ListItem
            button
            onClick={toggle(false)}
            selected={isActive}
            sx={{
              color: isActive ? "orange" : "inherit",
            }}
          >
            <ListItemIcon sx={{ color: isActive ? "orange" : "white" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </Link>
      );
    });

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#0e132a" }}>
        <Toolbar className="flex justify-between">
          {/* Left: Logo and Hamburger (mobile only) */}
          <Box className="flex items-center gap-3">
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggle(true)}
              >
                <MenuIcon />
              </IconButton>
            )}

            <img
              src="/logo1.jpg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            />
            <Typography variant="h6" noWrap>
              Admin Panel
            </Typography>
          </Box>

          {/* Nav links on desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} passHref>
                    <Typography
                      variant="button"
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        backgroundColor: isActive ? "orange" : "transparent",
                        color: isActive ? "#fff" : "#ccc",
                        "&:hover": { color: "white" },
                        transition: "0.3s",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                );
              })}

              {/* Logout for desktop */}
              {session && (
                <Typography
                  variant="button"
                  onClick={handleLogout}
                  sx={{
                    px: 2,
                    cursor: "pointer",
                    borderRadius: 1,
                    color: "#ccc",
                    "&:hover": { color: "orange" },
                  }}
                >
                  Logout
                </Typography>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggle(false)}>
        <Box
          sx={{ width: 260, bgcolor: "black", height: "100%", color: "#fff" }}
          role="presentation"
        >
          {/* Drawer Header */}
          <Box className="flex justify-between items-center px-4 py-3">
            <IconButton onClick={toggle(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Profile picture and name */}
          {session && (
            <Box className="flex flex-col items-center gap-2 pb-3">
              <Avatar
                src={session.user?.image || "/default-avatar.png"}
                sx={{ width: 64, height: 64 }}
              />
              <Typography variant="subtitle1">
                {session.user?.name || "Admin"}
              </Typography>
            </Box>
          )}

          <Divider sx={{ bgcolor: "gray" }} />

          {/* Navigation Links */}
          <List>{NavLinks()}</List>

          <Divider sx={{ bgcolor: "gray" }} />

          {/* Logout */}
          <List>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon sx={{ color: "white" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AdminNavbar;
