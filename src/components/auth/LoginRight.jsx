import { Box, Paper } from "@mui/material";
import LoginForm from "./LoginForm";

export default function LoginRight() {
  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#F4F6F8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 420,
          p: 5,
          borderRadius: 3,
        }}
      >
        <LoginForm />
      </Paper>
    </Box>
  );
}
