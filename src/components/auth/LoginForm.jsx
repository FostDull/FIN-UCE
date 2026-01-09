import { Typography, TextField, Button, Link, Grid, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function LoginForm() {
  return (
    <>
      <Typography variant="h5" fontFamily="serif" color="#0A1F44" mb={4}>
        Welcome to your Web Banking
      </Typography>

      <TextField label="Username" fullWidth margin="normal" />

      <Box textAlign="right">
        <Link href="#" underline="none" fontSize={14}>
          Forgot your username?
        </Link>
      </Box>

      <TextField label="Password" type="password" fullWidth margin="normal" />

      <Box textAlign="right" mb={3}>
        <Link href="#" underline="none" fontSize={14}>
          Forgot your password?
        </Link>
      </Box>

      <Button
        fullWidth
        size="large"
        sx={{
          bgcolor: "#FFF1A8",
          color: "#0A1F44",
          py: 1.5,
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "#FFE066",
          },
        }}
      >
        Sign in
      </Button>

      <Grid container spacing={2} mt={3}>
        <Grid item xs={6}>
          <Button variant="outlined" fullWidth sx={{ py: 2 }}>
            <LockOutlinedIcon />
            <Box ml={1} textAlign="left">
              <Typography fontWeight="bold" fontSize={14}>
                Account locked?
              </Typography>
              <Typography fontSize={13}>Unlock here</Typography>
            </Box>
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button variant="outlined" fullWidth sx={{ py: 2 }}>
            <PersonOutlineIcon />
            <Box ml={1} textAlign="left">
              <Typography fontWeight="bold" fontSize={14}>
                New user?
              </Typography>
              <Typography fontSize={13}>Register now</Typography>
            </Box>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
