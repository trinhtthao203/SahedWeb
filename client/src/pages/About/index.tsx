import { Container, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Giới thiệu về SAHED
      </Typography>
      <Typography variant="body1">
        Dự án SAHED nhằm nâng cao chất lượng giáo dục trong lĩnh vực nông nghiệp
        tại Trường Đại học An Giang (ĐHAG), Đại học Quốc gia TP.HCM (ĐHQG-HCM).
      </Typography>
    </Container>
  );
};

export default About;
