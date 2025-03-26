import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const FeedbackForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.comment.length > 500) {
      alert("Bình luận không được vượt quá 500 ký tự.");
      return;
    }

    try {
      const response = await axios.post(
        "https://sahed.agu.edu.vn/api/sendMail.php",
        formData,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (response.data.success) {
        alert("Phản hồi đã được gửi!");
        setFormData({ name: "", email: "", comment: "" });
      } else {
        alert("Lỗi khi gửi email, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi gửi email:", error);
      alert("Lỗi khi gửi email, vui lòng thử lại.");
    }
  };

  return (
    <div>
      <h2 className=" text-lg font-bold mb-4 text-white pt-10">
        {t("getintouch")}
      </h2>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-4 border rounded shadow"
        >
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mb-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-2 border rounded"
          />

          <textarea
            name="comment"
            placeholder={t("comment")}
            value={formData.comment}
            onChange={handleChange}
            maxLength={500}
            required
            className="w-full p-2 mb-2 border rounded h-24"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
