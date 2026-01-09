import { Box, Paper } from "@mui/material";
import LoginForm from "./LoginForm";

export default function LoginRight() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F4F6F8",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
        }}
      >
        <LoginForm />
      </Paper>
    </Box>
  );
}
