import { Box, Typography } from "@mui/material";
import { HeadrStyled } from "./styled";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PhoneIcon from "@mui/icons-material/Phone";
import { NavLink, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "../../assets/image/avt1.png";
import Logo2 from "../../assets/logo/logo2.png";
const items = [
  {
    label: "Trang chủ",
    icon: <HomeIcon fontSize="large" />,
    url: "/",
    // iconActive: ShoppingBag,
  },
  {
    label: "Dự án",
    icon: <ListIcon fontSize="large" />,
    url: "/project",
    // iconActive: ShoppingBag,
  },
  {
    label: "Giới thiệu",
    icon: <GroupsIcon fontSize="large" />,
    url: "/introduce",
    // iconActive: ShoppingBag,
  },
  {
    label: "Phản hồi",
    icon: <ChatIcon fontSize="large" />,
    url: "/feedback",
    // iconActive: ShoppingBag,
  },
  {
    label: "Tin tức",
    icon: <NewspaperIcon fontSize="large" />,
    url: "/news",
    // iconActive: ShoppingBag,
  },
  {
    label: "Liên hệ",
    icon: <PhoneIcon fontSize="large" />,
    url: "/contacts",
    // iconActive: ShoppingBag,
  },
];
interface IHeader {
  active: number;
}
const Header = ({ active }: IHeader) => {
  const navigate = useNavigate();

  return (
    <HeadrStyled>
      <Box className="header">
        <img style={{ width: "9rem" }} src={Logo2} />
      </Box>
      <Box className="header header-menu-option">
        {items.map((item, index) => (
          <NavLink
            key={index}
            // onClick={() => navigate(item.url)}
            className="header-menu-category"
            style={({ isActive }) => ({
              padding: isActive ? "2px 10px" : 0,
              textDecoration: "none",
              backgroundColor: isActive ? "#b7cee0" : "",
              color: isActive ? "#314C63" : "#fff",
              borderRadius: isActive ? "5px" : "",
            })}
            to={`${item.url}`}
          >
            {/* <HomeIcon fontSize="large" /> */}
            {item.icon}
            <Typography sx={{ fontWeight: "bold" }} fontSize={17}>
              {item.label}
            </Typography>
          </NavLink>
        ))}
        {/* <Box
          className="header-menu-category"
          onClick={() => navigate("/project")}
        >
          <ListIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Dự án
          </Typography>
        </Box>
        <Box
          onClick={() => navigate("/introduce")}
          className="header-menu-category"
        >
          <GroupsIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Giới thiệu
          </Typography>
        </Box>
        <Box
          onClick={() => navigate("/feedback")}
          className="header-menu-category"
        >
          <ChatIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Phản hồi
          </Typography>
        </Box>
        <Box onClick={() => navigate("/news")} className="header-menu-category">
          <NewspaperIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Tin tức
          </Typography>
        </Box>
        <Box
          onClick={() => navigate("/contacts")}
          className="header-menu-category"
        >
          <PhoneIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Liên hệ
          </Typography>
        </Box> */}
      </Box>
      {location.pathname === "/" || location.pathname === "/contacts" ? (
        <Box className="header-login">
          <Typography
            className="register-text"
            fontSize={17}
            onClick={() => navigate("/login")}
            fontWeight="bold"
          >
            Đăng ký
          </Typography>
          <Typography
            className="login-text"
            fontSize={17}
            onClick={() => navigate("/login")}
            fontWeight="bold"
          >
            Đăng nhập
          </Typography>
        </Box>
      ) : (
        <Box className="header-notication">
          <Box>
            <NotificationsIcon fontSize="large" />
            <Typography className="notice-status">1</Typography>
          </Box>

          <Box>
            <FavoriteIcon fontSize="large" />
            <Typography className="notice-status">1</Typography>
          </Box>
          <img className="header-avatar" src={Avatar} />
        </Box>
      )}
    </HeadrStyled>
  );
};

export default Header;
