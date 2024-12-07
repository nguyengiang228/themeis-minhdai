import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ForgotPassStyle } from "../styled";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IUserData {
  email: string;
  password: string;
}
const NewPassword = () => {
  const [inputValue, setInputValue] = useState<IUserData>({
    email: "",
    password: "",
  });
  const defaultTheme = createTheme();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <ToastContainer /> */}
      <ForgotPassStyle>
        <Box
          sx={{
            px: { xs: 0, xl: 46 },
            width: "100%",
          }}
        >
          <Grid
            container
            component="main"
            sx={{
              width: { xs: "100%", xl: "60vw" },
              height: "93.5vh",
              mb: 0.5,
            }}
          >
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={5}
              sx={{
                backgroundImage:
                  "url(https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/1594adf3c65404267d3f4e799feb7cde/detailed)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              component={Paper}
              elevation={5}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#324C63",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    float: "left",
                    alignItems: "center",
                    width: "65%",
                    mr: "8rem",
                    mb: "2rem",
                    justifyContent: "space-between",
                  }}
                >
                  <NavLink
                    style={{ color: "#000", textDecoration: "none" }}
                    to="/forgot-password"
                  >
                    <ArrowBackIcon />
                  </NavLink>
                  <Typography fontWeight="bold" component="h1" variant="h5">
                    Khôi phục mật khẩu
                  </Typography>
                </Box>
                <Box sx={{ mt: 1, width: "90%" }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Nhập mật khẩu mới"
                    type="password"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) =>
                      setInputValue({
                        ...inputValue,
                        email: e.target.value,
                      })
                    }
                  >
                    {inputValue.email}
                  </TextField>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Nhập lại mật khẩu mới"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) =>
                      setInputValue({
                        ...inputValue,
                        password: e.target.value,
                      })
                    }
                  >
                    {inputValue.password}
                  </TextField>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      // type="submit"
                      onClick={() => navigate("/login-user")}
                      variant="contained"
                      sx={{
                        width: { xs: "95%", xl: "50%" },
                        mt: 3,
                        mb: 2,
                        borderRadius: "5px",
                        height: { xs: "50px" },
                        bgcolor: "#324c63",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      Đăng nhập
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ForgotPassStyle>
    </ThemeProvider>
  );
};

export default NewPassword;