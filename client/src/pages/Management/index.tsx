import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import Heading from "../../components/Heading";
import ImageModal from "../../components/ImageModal";
interface ManagementBoardItem {
  id: number;
  name: string;
  position: string;
  role: string;
  group: string;
}

const ManagementBoard: React.FC = () => {
  const { t } = useTranslation();
  const [managementBoard, setManagementBoard] = useState<ManagementBoardItem[]>(
    []
  );
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "vi"
  );

  // Hàm lấy dữ liệu từ API
  const fetchManagementBoard = (lang: string) => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/management-board.php?lang=${lang}`)
      .then((response) => {
        if (response.data && response.data.data) {
          setManagementBoard(response.data.data);
          localStorage.setItem(
            "managementBoard",
            JSON.stringify(response.data.data)
          );
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu Management Board:", error);
      });
  };

  // Gọi API khi ngôn ngữ thay đổi
  useEffect(() => {
    fetchManagementBoard(language);
  }, [language]);

  // Lắng nghe sự thay đổi của ngôn ngữ từ LocalStorage (từ Navbar)
  useEffect(() => {
    const handleStorageChange = () => {
      const newLang = localStorage.getItem("language") || "vi";
      setLanguage(newLang);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Nhóm dữ liệu theo `group`
  const groupedData = managementBoard.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {} as Record<string, ManagementBoardItem[]>);

  return (
    <div>
      <Navbar />
      <Heading title={t(`${"manager_title_page"}`)} />
      <div className=" md:w-1/2 px-10 mx-auto">
        <ImageModal
          imageUrl={"https://sahed.agu.edu.vn/uploads/managermentboard.jpg"}
        />
      </div>
      <p className="flex justify-center text-xl italic p-1">
        {t(`${"managerment_board_image_description"}`)}
      </p>
      <p className="flex justify-center text-xl p-10">
        {t(`${"manager_title_description"}`)}
      </p>

      <div className=" container mx-auto p-4 flex justify-center">
        <TableContainer component={Paper} sx={{ p: 2 }}>
          {Object.entries(groupedData).map(([group, members]) => (
            <div key={group} style={{ marginBottom: 20 }}>
              <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
                {group}
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>{t(`${"fullname"}`)}</b>
                    </TableCell>
                    <TableCell>
                      <b>{t(`${"position"}`)}</b>
                    </TableCell>
                    <TableCell>
                      <b>{t(`${"roles"}`)}</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {members.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.position}</TableCell>
                      <TableCell>{member.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </TableContainer>
      </div>

      <Footer />
    </div>
  );
};

export default ManagementBoard;
