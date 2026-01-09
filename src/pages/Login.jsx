import { Grid } from "@mui/material";
import LoginLeft from "../components/auth/LoginLeft";
import LoginRight from "../components/auth/LoginRight";

export default function Login() {
  return (
    <Grid container minHeight="100vh">
      <Grid item xs={12} lg={6}>
        <LoginLeft />
      </Grid>

      <Grid item xs={12} lg={6}>
        <LoginRight />
      </Grid>
    </Grid>
  );
}
