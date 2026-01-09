import { Box, Typography, Stack } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function LoginLeft() {
  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: "#FFFFFF",
        px: 6,
        py: 4,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ width: 32, height: 32, bgcolor: "#F5C400" }} />
        <Typography fontWeight="bold" fontSize={20} color="#0A1F44">
          FINUCE
        </Typography>
      </Stack>

      {/* Main text */}
      <Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            bgcolor: "#F4F6F8",
            px: 3,
            py: 1.5,
            borderRadius: 50,
            width: "fit-content",
          }}
        >
          <LockIcon color="success" />
          <Typography variant="body2">
            https://web.finuce.edu.ec/login
          </Typography>
        </Stack>

        {/* Illustration placeholder */}
        <Box
          sx={{
            mt: 6,
            width: 260,
            height: 260,
            borderRadius: "50%",
            bgcolor: "#EFF2F5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9CA3AF",
          }}
        >
          Illustration
        </Box>
      </Box>

      {/* Footer tips */}
      <Box>
        <Typography variant="body2" mb={1}>
          <strong>01.</strong> Protect your username and password.
        </Typography>
        <Typography variant="body2" mb={3}>
          <strong>02.</strong> Before entering your Digital Key, verify that the
          last 4 digits of your ID are correct.
        </Typography>

        <Typography variant="caption" color="text.secondary">
          Terms of use © 2026 FinUCE. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
