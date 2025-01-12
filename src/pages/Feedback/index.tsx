import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Avatar,
  Rating,
  Pagination,
  IconButton,
} from "@mui/material";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import Avt2 from "../../assets/image/avt2.png";
import Home10 from "../../assets/image/img10.png";

const reviews = [
  {
    id: 1,
    name: "Phạm Văn Vượng",
    rating: 4,
    text: "Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu như trường học, bệnh viện và khu mua sắm. Chất lượng xây dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết định đầu tư vào Ariyana Lakeside Văn Quán.",
    avt: Avt2,
    image: Home10,
    helpful: 10,
    notHelpful: 2,
  },
  {
    id: 2,
    name: "Phạm Văn Vượng",
    rating: 4,
    text: "Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu như trường học, bệnh viện và khu mua sắm. Chất lượng xây dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết định đầu tư vào Ariyana Lakeside Văn Quán.",
    avt: Avt2,
    image: Home10,
    helpful: 8,
    notHelpful: 1,
  },
  {
    id: 3,
    name: "Phạm Văn Vượng",
    rating: 4,
    text: "Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu như trường học, bệnh viện và khu mua sắm. Chất lượng xây dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết định đầu tư vào Ariyana Lakeside Văn Quán.",
    avt: Avt2,
    image: Home10,
    helpful: 5,
    notHelpful: 3,
  },
  {
    id: 4,
    name: "Phạm Văn Vượng",
    rating: 4,
    text: "Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu như trường học, bệnh viện và khu mua sắm. Chất lượng xây dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết định đầu tư vào Ariyana Lakeside Văn Quán.",
    avt: Avt2,
    image: Home10,
    helpful: 10,
    notHelpful: 2,
  },
  {
    id: 5,
    name: "Phạm Văn Vượng",
    rating: 4,
    text: "Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu như trường học, bệnh viện và khu mua sắm. Chất lượng xây dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết định đầu tư vào Ariyana Lakeside Văn Quán.",
    avt: Avt2,
    image: Home10,
    helpful: 8,
    notHelpful: 1,
  },
  {
    id: 6,
    name: "Phạm Văn Vượng",
    rating: 4,
    text: "Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu như trường học, bệnh viện và khu mua sắm. Chất lượng xây dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết định đầu tư vào Ariyana Lakeside Văn Quán.",
    avt: Avt2,
    image: Home10,
    helpful: 5,
    notHelpful: 3,
  },
  {
    id: 7,
    name: "Phạm Văn Vượng",
    rating: 4,
    text: "Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu như trường học, bệnh viện và khu mua sắm. Chất lượng xây dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết định đầu tư vào Ariyana Lakeside Văn Quán.",
    avt: Avt2,
    image: Home10,
    helpful: 10,
    notHelpful: 2,
  },
  {
    id: 8,
    name: "Phạm Văn Vượng",
    rating: 4,
    text: "Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu như trường học, bệnh viện và khu mua sắm. Chất lượng xây dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết định đầu tư vào Ariyana Lakeside Văn Quán.",
    avt: Avt2,
    image: Home10,
    helpful: 8,
    notHelpful: 1,
  },
  {
    id: 9,
    name: "Phạm Văn Vượng",
    rating: 4,
    text: "Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu như trường học, bệnh viện và khu mua sắm. Chất lượng xây dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết định đầu tư vào Ariyana Lakeside Văn Quán.",
    avt: Avt2,
    image: Home10,
    helpful: 5,
    notHelpful: 3,
  },
];

const ITEMS_PER_PAGE = 5;

const FeedbackPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Tính toán các mục hiển thị trên mỗi trang
  const paginatedReviews = reviews.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

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

      <Typography ml={20} sx={{ color: "#8a8989" }}>
        Trang chủ / <span style={{ color: "#000" }}>Phản hồi</span>
      </Typography>
      <Box sx={{ padding: "2rem 5rem 3rem 17rem", width: "75%" }}>
        <Box>
          {paginatedReviews.map((review) => (
            <Card
              key={review.id}
              sx={{
                maxWidth: "90%",
                margin: "1rem 8rem 2rem 8rem",
                boxShadow: 3,
                pb: 5,
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  p: 2,
                  alignItems: "center",
                  width: "28%",
                  justifyContent: "space-between",
                }}
              >
                <Avatar
                  alt="Phạm Văn Vượng"
                  src={review.avt} // Thay bằng ảnh thật nếu có
                />
                <Typography mt={1}>{review.name}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating value={4} precision={0.5} readOnly />
                </Box>
              </Box>

              {/* Content */}
              <Box sx={{ display: "flex", ml: 2 }}>
                <Box width="100%">
                  <Box
                    component="img"
                    src={review.image} // Thay bằng URL ảnh thật
                    alt="Căn hộ Ariyana Lakeside Văn Quán"
                    sx={{
                      width: "100%",
                      borderRadius: 2,
                      border: "1px solid #ddd",
                      // marginBottom: 2,
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Căn hộ Ariyana Lakeside Văn Quán
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2, ml: 1, mr: 2 }}
                  >
                    Căn hộ ở đây có vị trí tốt, nằm gần nhiều tiện ích ngoại khu
                    như trường học, bệnh viện và khu mua sắm. Chất lượng xây
                    dựng khá ổn, tuy nhiên vẫn còn vài điểm có thể cải thiện về
                    cách âm giữa các căn hộ. Nhìn chung, tôi hài lòng với quyết
                    định đầu tư vào Ariyana Lakeside Văn Quán.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        px: 2,
                        pb: 2,
                        width: "32%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                          10 Hữu ích
                        </Typography>
                        <IconButton size="small" color="primary">
                          <ThumbUpAltIcon />
                        </IconButton>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton size="small">
                          <ThumbDownAltOutlinedIcon />
                        </IconButton>
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                          Không hữu ích
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Footer */}
            </Card>
          ))}
        </Box>

        {/* Phân trang */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <Pagination
            count={Math.ceil(reviews.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handleChangePage}
            color="standard"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default FeedbackPage;
