import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import Footer from "../../containers/Footer";

const ContactPage = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "45px",
          color: "#fff",
          backgroundColor: "#baa360",
        }}
      />
      <Header />
      <Menu />

      <Box display="flex">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "65vh",
            pl: "35rem",
            //   backgroundColor: "#d4e2f2", // Màu nền form
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "3rem 8rem",
              width: "500px",
              borderRadius: 2,
              backgroundColor: "#7298BD66", // Màu nền form chính
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#003366", // Màu chữ tiêu đề
                mb: 3,
              }}
            >
              Liên hệ với chúng tôi
            </Typography>
            {/* Form input fields */}
            <Box component="form" noValidate autoComplete="off">
              <Typography sx={{ color: "#858383" }}>Họ và tên</Typography>
              <TextField
                //   label="Họ và tên"
                variant="outlined"
                fullWidth
                sx={{
                  mb: 2,
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                size="small"
              />

              <Typography sx={{ color: "#858383" }}>Email</Typography>
              <TextField
                //   label="Email"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  mb: 2,
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />

              <Typography sx={{ color: "#858383" }}>Số điện thoại</Typography>
              <TextField
                //   label="Số điện thoại"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  mb: 2,
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />

              <Typography sx={{ color: "#858383" }}>Nội dung</Typography>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{
                  mb: 3,
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  // fullWidth
                  sx={{
                    backgroundColor: "#003366",
                    color: "#fff",
                    fontWeight: "bold",
                    p: "0.7rem 4rem",
                    textTransform: "none",
                    ":hover": {
                      backgroundColor: "#002244",
                    },
                  }}
                >
                  Đăng ký
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactPage;
