import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

export default function BasicButtons({ title }: any) {
  const { t } = useTranslation();
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{t(`${title}`)}</Button>
    </Stack>
  );
}
