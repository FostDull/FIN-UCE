import {
  Typography,
  TextField,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h5" fontFamily="serif" color="#0A1F44" mb={3}>
        Verify your identity
      </Typography>

      <TextField
        label="Identity document or passport"
        fullWidth
        margin="normal"
      />

      <Typography fontSize={14} mt={3} mb={1}>
        Debit card PIN
      </Typography>

      {/* Fake PIN dots */}
      <Box display="flex" gap={1} mb={3}>
        {[1, 2, 3, 4].map((i) => (
          <Box
            key={i}
            sx={{
              width: 12,
              height: 12,
              border: "1px solid #90CAF9",
              borderRadius: "50%",
            }}
          />
        ))}
      </Box>

      {/* Numeric keypad */}
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mb={3}>
        {[2, 7, 6, 1, 3, 8, 5, 4, 0].map((num) => (
          <Button
            key={num}
            variant="outlined"
            sx={{ borderRadius: "50%", height: 56 }}
          >
            {num}
          </Button>
        ))}
      </Box>

      <FormControlLabel
        control={<Checkbox />}
        label="I accept the terms and conditions"
      />

      <Button
        fullWidth
        sx={{
          mt: 3,
          bgcolor: "#FFF1A8",
          color: "#0A1F44",
          py: 1.5,
          fontWeight: "bold",
          "&:hover": { bgcolor: "#FFE066" },
        }}
      >
        Continue
      </Button>

      <Button fullWidth sx={{ mt: 2 }} onClick={() => navigate("/")}>
        Back to Web Banking
      </Button>
    </>
  );
}
