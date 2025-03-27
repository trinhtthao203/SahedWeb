import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import UserManagement from "./UserManagement";
import PostManagement from "./PostManagement";

const menuItems = [
  {
    text: "Quản lý tài khoản",
    icon: <PeopleIcon />,
    component: <UserManagement />,
  },
  {
    text: "Quản lý bài đăng",
    icon: <ArticleIcon />,
    component: <PostManagement />,
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user || user.role !== "admin") {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
        }}
      >
        <Typography variant="h6" sx={{ p: 2, textAlign: "center" }}>
          Admin Dashboard
        </Typography>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              component="button"
              key={index}
              selected={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#e0e0e0",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

        {/* Nút Đăng xuất */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Button
            startIcon={<ExitToAppIcon />}
            color="error"
            variant="contained"
            onClick={handleLogout}
            sx={{ width: "80%" }}
          >
            Đăng xuất
          </Button>
        </Box>
      </Drawer>

      {/* Nội dung chính */}
      <Box sx={{ flexGrow: 1, p: 3 }}>{menuItems[selectedIndex].component}</Box>
    </Box>
  );
};

export default AdminDashboard;
