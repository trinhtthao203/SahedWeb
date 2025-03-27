import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Xác định kiểu dữ liệu của Post
interface Post {
  id: number;
  title: string;
  image: string;
}

const PostManagement = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Định nghĩa mảng Post

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/posts.php`
        );
        const data = await response.json();
        setPosts(data || []);
      } catch (error) {
        console.error("Lỗi tải danh sách bài đăng", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Tiêu đề</TableCell>
            <TableCell>Hình ảnh</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>
                <img src={post.image} alt={post.title} width="100" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostManagement;
