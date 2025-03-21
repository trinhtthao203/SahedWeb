import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const pages = [
  { label: "about", path: "/docs/introduction" },
  { label: "manager", path: "/management-board" },
  {
    label: "module",
    path: "/#module",
    submenu: [
      { label: "module_one", path: "/docs/components-one" },
      { label: "module_two", path: "/docs/components-two" },
      { label: "module_three", path: "/docs/components-three" },
      { label: "module_four", path: "/docs/components-four" },
    ],
  },
  { label: "news", path: "/#news" },
  { label: "contact", path: "/#footer" },
  { label: "partners", path: "/#partners" },
];

function Navbar() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElSubMenu, setAnchorElSubMenu] =
    React.useState<null | HTMLElement>(null);
  const [language, setLanguage] = React.useState(i18n.language);

  React.useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElSubMenu(null);
  };

  const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSubMenu(event.currentTarget);
  };

  const handleChangeLanguage = (lang: string) => {
    localStorage.setItem("language", lang);
    window.dispatchEvent(new Event("storage")); // Báo hiệu các trang khác cập nhật
  };

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <div key={page.label}>
                  {page.submenu ? (
                    <>
                      <MenuItem onClick={handleOpenSubMenu}>
                        {t(page.label)}
                      </MenuItem>
                      <Menu
                        anchorEl={anchorElSubMenu}
                        open={Boolean(anchorElSubMenu)}
                        onClose={handleCloseNavMenu}
                      >
                        {page.submenu.map((sub) => (
                          <MenuItem
                            key={sub.label}
                            onClick={() => navigate(sub.path)}
                          >
                            {t(sub.label)}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <MenuItem onClick={() => navigate(page.path)}>
                      {t(page.label)}
                    </MenuItem>
                  )}
                </div>
              ))}
            </Menu>
          </Box>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white p-[1rem]"
            onClick={() => navigate("/")}
          >
            SAHED
          </p>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page.submenu ? (
                <div key={page.label}>
                  <Button
                    onClick={handleOpenSubMenu}
                    sx={{ my: 2, color: "white" }}
                  >
                    {t(page.label)}
                  </Button>
                  <Menu
                    anchorEl={anchorElSubMenu}
                    open={Boolean(anchorElSubMenu)}
                    onClose={handleCloseNavMenu}
                  >
                    {page.submenu.map((sub) => (
                      <MenuItem
                        key={sub.label}
                        onClick={() => navigate(sub.path)}
                      >
                        {t(sub.label)}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <Button
                  key={page.label}
                  onClick={() => navigate(page.path)}
                  sx={{ my: 2, color: "white" }}
                >
                  {t(page.label)}
                </Button>
              )
            )}
          </Box>
          <Select
            value={language}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
              handleChangeLanguage(e.target.value);
            }}
            sx={{ color: "white", ml: 2 }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="vi">VN</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
