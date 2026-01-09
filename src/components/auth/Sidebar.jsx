import { Box, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const navButton = (label, path) => (
    <Button
      fullWidth
      sx={{
        justifyContent: "flex-start",
        color: "#0A1F44",
        py: 1.5,
      }}
      onClick={() => navigate(path)}
    >
      {label}
    </Button>
  );

  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        bgcolor: "#FFFFFF",
        borderRight: "1px solid #E0E0E0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        px: 2,
        py: 3,
      }}
    >
      {/* TOP */}
      <Box>
        <Box fontWeight="bold" fontSize={20} mb={3}>
          FIN-UCE
        </Box>

        {navButton("Dashboard", "/dashboard")}
        {navButton("Send Money", "/dashboard/send")}
        {navButton("Transactions", "/dashboard/transactions")}
        {navButton("Payment Methods", "/dashboard/payments")}
      </Box>

      {/* BOTTOM */}
      <Box>
        <Divider />
        {navButton("Configuration", "/dashboard/config")}
        {navButton("Log out", "/")}
      </Box>
    </Box>
  );
}
