import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/register.php`, {
        action: "login",
        username,
        password,
      });

      console.log("Phản hồi từ backend:", res.data); // ✅ Thêm dòng này để kiểm tra

      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/admin/dashboard"); // ✅ Điều hướng sau khi login
      } else {
        setError("Sai tài khoản hoặc mật khẩu.");
      }
    } catch (err: any) {
      setError(err?.response?.data?.error || "Đã xảy ra lỗi.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardContent>
          <Typography variant="h5" className="mb-4 text-center">
            Đăng nhập
          </Typography>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <TextField type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit" variant="contained">Đăng nhập</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
