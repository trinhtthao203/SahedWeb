import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/admin/login");
    } else {
      setLoading(false); // Cho render dashboard
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  if (loading) return null; // hoặc loading spinner

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-3xl font-bold mb-4">Chào mừng đến Dashboard</h1>
      <Button variant="outlined" onClick={handleLogout}>Đăng xuất</Button>
    </div>
  );
}
