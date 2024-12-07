import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import Menu from "../../containers/Menu";
import News1 from "../../assets/news/new4a.png";
import News2 from "../../assets/news/news4.png";
import News3 from "../../assets/news/news5.png";
import News5 from "../../assets/news/news6.png";
import News6 from "../../assets/news/news7.png";
import News7 from "../../assets/news/news8.png";
import News10 from "../../assets/news/news10.png";
import News11 from "../../assets/news/news11.png";
import News12 from "../../assets/news/news12.png";
import News13 from "../../assets/news/news13.png";
import News14 from "../../assets/news/news14.png";
import News15 from "../../assets/news/news15.png";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const NewsPage = () => {
  const navigate = useNavigate();
  const datas = [
    {
      title: "Thị trường",
      value: [
        {
          title: "Khám phá 'chuẩn sống' khác biệt tại Sea City",
          location:
            "Ocean City đang là nơi an cư đáng mơ ước của hơn 60.000 cư dân cả trong và ngoài nước bởi những giá trị sống khác biệt chỉ có tại “nơi đáng sống nhất hành tinh”.",

          status: "26/10/2024",

          img: News1,
        },
        {
          title: "Chung cư Thăng Long Number One - Không gian sống lý ",
          location:
            "Ocean City đang là nơi an cư đáng mơ ước của hơn 60.000 cư dân cả trong và ngoài nước bởi những giá trị sống khác biệt chỉ có tại “nơi đáng sống nhất hành tinh”.",

          status: "26/10/2024",
          img: News2,
        },
        {
          title: "Top 30 Dự án Chung cư Thuận An, Bình Dương",
          location:
            "Thuận An là một trong những thành phố phát triển bậc nhất của tỉnh Bình Dương. Nơi đây hội tụ nhiều yếu tố thuận lợi cho phát triển kinh tế, xã hội, thu hút đông đảo người dân đến sinh sống và làm việc",
          status: "26/10/2024",
          img: News3,
        },
        {
          title: "Kinh nghiệm bán và cho thuê căn hộ Khu đô thị Celadon...",
          location:
            "Nắm rõ điểm mạnh của căn hộ tại Khu đô thị Celadon City khi bán nhà là chìa khóa để thu hút khách hàng và tăng cơ hội bán thành công.",
          status: "26/10/2024",
          img: News5,
        },
        {
          title: "Tìm hiểu về Căn hộ dịch vụ Bình Thạnh",
          location:
            "Bạn đang tìm kiếm một căn hộ dịch vụ tại quận Bình Thạnh, một trong những quận sầm uất và thuận tiện nhất của thành phố Hồ Chí Minh? Bạn muốn có một không gian sống tiện nghi, sang trọng và an toàn...",
          status: "26/10/2024",
          img: News6,
        },
        {
          title: "Laimian City Quận 2",
          location:
            "Laimian City Quận 2 là dự án có quy mô rộng lớn nhất quận 2. Được ví như “Thành phố trong lòng thành phố”. Cư dân sinh sống tại Laimian City như được đắm mình vào thiên nhiên. ",

          status: "26/10/2024",
          img: News7,
        },
      ],
    },
    {
      title: "Sự kiện",
      value: [
        {
          title: "Khám phá 'chuẩn sống' khác biệt tại Sea City",
          location:
            "Ocean City đang là nơi an cư đáng mơ ước của hơn 60.000 cư dân cả trong và ngoài nước bởi những giá trị sống khác biệt chỉ có tại “nơi đáng sống nhất hành tinh”.",

          status: "26/10/2024",

          img: News10,
        },
        {
          title: "Chung cư Thăng Long Number One - Không gian sống lý ",
          location:
            "Ocean City đang là nơi an cư đáng mơ ước của hơn 60.000 cư dân cả trong và ngoài nước bởi những giá trị sống khác biệt chỉ có tại “nơi đáng sống nhất hành tinh”.",

          status: "26/10/2024",
          img: News11,
        },
        {
          title: "Top 30 Dự án Chung cư Thuận An, Bình Dương",
          location:
            "Thuận An là một trong những thành phố phát triển bậc nhất của tỉnh Bình Dương. Nơi đây hội tụ nhiều yếu tố thuận lợi cho phát triển kinh tế, xã hội, thu hút đông đảo người dân đến sinh sống và làm việc",
          status: "26/10/2024",
          img: News12,
        },
        {
          title: "Kinh nghiệm bán và cho thuê căn hộ Khu đô thị Celadon...",
          location:
            "Nắm rõ điểm mạnh của căn hộ tại Khu đô thị Celadon City khi bán nhà là chìa khóa để thu hút khách hàng và tăng cơ hội bán thành công.",
          status: "26/10/2024",
          img: News13,
        },
        {
          title: "Tìm hiểu về Căn hộ dịch vụ Bình Thạnh",
          location:
            "Bạn đang tìm kiếm một căn hộ dịch vụ tại quận Bình Thạnh, một trong những quận sầm uất và thuận tiện nhất của thành phố Hồ Chí Minh? Bạn muốn có một không gian sống tiện nghi, sang trọng và an toàn...",
          status: "26/10/2024",
          img: News14,
        },
        {
          title: "Laimian City Quận 2",
          location:
            "Laimian City Quận 2 là dự án có quy mô rộng lớn nhất quận 2. Được ví như “Thành phố trong lòng thành phố”. Cư dân sinh sống tại Laimian City như được đắm mình vào thiên nhiên. ",

          status: "26/10/2024",
          img: News15,
        },
      ],
    },
  ];

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

      <Box sx={{ my: 3 }}>
        <Container maxWidth="lg">
          <Stack alignItems="start" justifyContent="start" gap={5}>
            {datas.map(({ title, value }) => {
              return (
                <Stack
                  alignItems="start"
                  justifyContent="start"
                  gap={2}
                  key={title}
                >
                  {title && (
                    <Stack direction="row" alignItems="center" gap={1}>
                      <Typography sx={{ opacity: 0.6 }}>Dự án </Typography>
                      <Typography> / {title}</Typography>
                    </Stack>
                  )}
                  <Grid container spacing={3}>
                    {value.map(({ title, location, status, img }) => (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={6}
                        xl={6}
                        key={title}
                      >
                        <Card
                          onClick={() => navigate("/news-child-page")}
                          sx={{
                            display: "flex",
                            borderRadius: 2,
                            boxShadow: 3,
                            width: "100%",
                            minHeight: "190px",
                            cursor: "pointer",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                              transform: "translateY(-5px)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              width: 210,
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={img || ""}
                              alt={title}
                              sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              flex: 1,
                              justifyContent: "start",
                            }}
                          >
                            <CardContent>
                              <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                  fontSize: "17px",
                                  fontWeight: "550",
                                }}
                              >
                                {title}
                              </Typography>
                              <Typography
                                sx={{ fontSize: "13px" }}
                                color="text.secondary"
                                gutterBottom
                              >
                                {location}
                              </Typography>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                                my={1}
                              ></Box>
                              <Box display="flex" alignItems="center">
                                <AccessTimeOutlinedIcon sx={{ mr: "1rem" }} />{" "}
                                {status}
                              </Box>
                            </CardContent>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  <Stack alignItems="center" sx={{ width: "100%" }}>
                    <Button
                      variant="text"
                      color="inherit"
                      sx={{ textTransform: "inherit" }}
                    >
                      <Stack alignItems="center">
                        Xem thêm
                        <KeyboardArrowDownIcon sx={{ marginTop: "-6px" }} />
                      </Stack>
                    </Button>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};
export default NewsPage;
