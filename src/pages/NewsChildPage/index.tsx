import { Box, Button, TextField, Typography } from "@mui/material";
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import Footer from "../../containers/Footer";
import { NewsChildPageStyle } from "./styled";
import NewsChild from "../../assets/news/newsChild.png";

const NewsChildPage = () => {
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
      <Box display="flex" justifyContent="center">
        <NewsChildPageStyle>
          <Typography mt="1rem" mb="1rem" variant="h5" fontWeight="bold">
            TOÀN CẢNH THỊ TRƯỜNG BẤT ĐỘNG SẢN 2024 VÀ SỰ KIỆN TẠI ĐÀ NẴNG
          </Typography>
          <Typography variant="body2">
            Sự kiện Toàn cảnh thị trường BĐS 2024 và Tiêu điểm Đà Nẵng lần đầu
            tiên diễn ra tại Thủ Đô Hà Nội vào ngày 13/11/2024 do
            Batdongsan.com.vn sẽ là cơ hội tuyệt vời để các nhà đầu tư và khách
            hàng tại Hà Nội tìm hiểu về tiềm năng phát triển mạnh mẽ của thị
            trường bất động sản tại thành phố Đà Nẵng – điểm sáng của thị trường
            bất động sản miền Trung.
          </Typography>
          <img style={{ width: "50vw", marginTop: "1rem" }} src={NewsChild} />
          <Typography mt="1rem" mb="1rem" variant="h5">
            Nội dung sự kiện
          </Typography>
          <Typography>
            Sự kiện Toàn cảnh thị trường BĐS 2024 và Tiêu điểm Đà Nẵng lần đầu
            tiên diễn ra tại Thủ Đô Hà Nội vào ngày 13/11/2024 do
            Batdongsan.com.vn sẽ là cơ hội tuyệt vời để các nhà đầu tư và khách
            hàng tại Hà Nội tìm hiểu về tiềm năng phát triển mạnh mẽ của thị
            trường bất động sản tại thành phố Đà Nẵng – điểm sáng của thị trường
            bất động sản miền Trung.
          </Typography>
          <Typography>
            - Kinh tế Vĩ mô và những thay đổi về Luật
            <br />
            - Tổng quan thị trường BĐS Việt Nam 3 quý đầu năm &<br />
            phân khúc chung cư cao cấp
            <br />
            -Tổng quan thị trường BĐS Đà Nẵng 2024 &<br />
            phân khúc căn hộ nghỉ dưỡng
            <br />- Bất động sản hạng sang
          </Typography>
          <Typography mt="1rem" mb="1rem" variant="h5">
            Chuyên gia tham gia sự kiện
          </Typography>
          <Typography>
            - Ông Trần Đình Thiên - Phó giáo sư, Tiến sĩ Kinh tế học,  nguyên
            Viện trưởng Viện Kinh tế Việt Nam
            <br />
            - Ông Nguyễn Quốc Anh - Phó TGĐ & GDKD Vietland.com
            <br />
            - Ông Hà Nghiệm - GĐ khu vực miền Trung Vietland.com
            <br />- Ông Trần Xuân Mới - TGD Công ty tư vấn ATM
          </Typography>
          <Typography mt="1rem" mb="1rem" variant="h5">
            Đối tượng tham gia sự kiện
          </Typography>
          <Typography>
            - Khách hàng có nhu cầu tìm kiếm thị trường đầu tư mới
            <br />
            - Quản lý cấp cao, Giám đốc Kinh doanh, Giám đốc Marketing, lãnh đạo
            tại các doanh nghiệp BĐS
            <br />
            - Doanh nghiệp, Chủ đầu tư, nhà phát triển dự án
            <br />
            - Các nhà đầu tư quan tâm tới thị trường BDS Đà Nẵng
            <br />- Cơ quan báo chí
          </Typography>
          <Typography mt="1rem" mb="1rem" variant="h5" fontWeight="bold">
            THÔNG TIN CHI TIẾT VỀ SỰ KIỆN
          </Typography>
          <Typography>
            Sự kiện sẽ được tổ chức vào lúc 08h00 ngày 13/12/2024 tại Khách sạn
            Melia, 44 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội. Đây là sự kiện hoàn
            toàn MIỄN PHÍ nên Quý khách hàng có thể đăng ký để nhận vé mời từ
            BTC! 
          </Typography>
          <Typography
            mt="1rem"
            mb="1rem"
            variant="h5"
            sx={{ color: "#EF0707" }}
            fontWeight="bold"
          >
            Đăng ký tham gia sự kiện
          </Typography>
          <Box sx={{ display: "flex", textAlign: "center", marginTop: "20px" }}>
            <Typography
              variant="h6"
              m="0 2rem 0 0 "
              width="20%"
              display="center"
              alignItems="center"
            >
              Họ và tên <span style={{ color: "red" }}> *</span>
            </Typography>
            <TextField fullWidth placeholder="Họ và tên" />
          </Box>
          <Box sx={{ display: "flex", textAlign: "center", marginTop: "20px" }}>
            <Typography
              variant="h6"
              m="0 2rem 0 0 "
              width="20%"
              display="center"
              alignItems="center"
            >
              Địa chỉ Email <span style={{ color: "red" }}> *</span>
            </Typography>
            <TextField fullWidth placeholder="Địa chỉ Email" />
          </Box>
          <Box sx={{ display: "flex", textAlign: "center", marginTop: "20px" }}>
            <Typography
              variant="h6"
              m="0 2rem 0 0 "
              width="20%"
              display="center"
              alignItems="center"
            >
              Số điện thoại <span style={{ color: "red" }}> *</span>
            </Typography>
            <TextField fullWidth placeholder="Số điện thoại" />
          </Box>
          <Box sx={{ display: "flex", textAlign: "center", marginTop: "20px" }}>
            <Typography
              variant="h6"
              m="0 2rem 0 0 "
              width="20%"
              display="center"
              alignItems="center"
            >
              Ghi chú
            </Typography>
            <TextField fullWidth placeholder="Ghi chú" />
          </Box>
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#324C63",
                textTransform: "initial",
                fontWeight: "bold",
                p: "0.7rem 2rem",
              }}
            >
              Đăng ký
            </Button>
          </Box>
        </NewsChildPageStyle>
      </Box>
      <Footer />
    </Box>
  );
};

export default NewsChildPage;
