import { Typography, TextField, Button, Link, Grid, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h5" fontFamily="serif" color="#0A1F44" mb={4}>
        Welcome to your FinUCE
      </Typography>

      <TextField label="Username" fullWidth margin="normal" />

      <Box textAlign="right">
        <Link underline="none" fontSize={14}>
          Forgot your username?
        </Link>
      </Box>

      <TextField label="Password" type="password" fullWidth margin="normal" />

      <Box textAlign="right" mb={3}>
        <Link underline="none" fontSize={14}>
          Forgot your password?
        </Link>
      </Box>

      {/* SIGN IN */}
      <Button
        fullWidth
        size="large"
        sx={{
          bgcolor: "#FFF1A8",
          color: "#0A1F44",
          py: 1.5,
          fontWeight: "bold",
          "&:hover": { bgcolor: "#FFE066" },
        }}
        onClick={() => navigate("/dashboard")}
      >
        SIGN IN
      </Button>

      <Grid container spacing={2} mt={3}>
        {/* ACCOUNT LOCKED */}
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

        {/* NEW USER → REGISTER */}
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            sx={{ py: 2 }}
            onClick={() => navigate("/register")}
          >
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
