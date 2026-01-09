import { Box, Paper } from "@mui/material";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

export default function AuthLayout({ formType = "login" }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          width: "50%",
          bgcolor: "#FFFFFF",
          px: 8,
          py: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box fontWeight="bold" fontSize={20}>
          FIN-UCE
        </Box>

        <Box>
          <Box
            sx={{
              fontSize: 28,
              fontFamily: "serif",
              color: "#0A1F44",
              mb: 3,
            }}
          >
            Verify in your browser that you are on Web Banking.
          </Box>

          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 3,
              py: 1.5,
              borderRadius: 999,
              bgcolor: "#F1F3F5",
              fontSize: 14,
            }}
          >
            🔒 https://web.fin-uce.edu.ec
          </Box>

          <Box
            sx={{
              width: 260,
              height: 260,
              bgcolor: "#EEF2F5",
              borderRadius: "50%",
              mt: 6,
            }}
          />
        </Box>

        <Box fontSize={12} color="gray">
          © 2026 FIN-UCE. All rights reserved.
        </Box>
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          width: "50%",
          bgcolor: "#F4F6F8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            maxWidth: 420,
            p: 5,
            borderRadius: 2,
          }}
        >
          {formType === "login" ? <LoginForm /> : <RegisterForm />}
        </Paper>
      </Box>
    </Box>
  );
}
