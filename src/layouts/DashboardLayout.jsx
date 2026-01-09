import { Box } from "@mui/material";
import Sidebar from "../components/auth/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <Box display="flex">
      <Sidebar />

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#F4F6F8",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
