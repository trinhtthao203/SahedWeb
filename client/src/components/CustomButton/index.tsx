import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function BasicButtons({
  title,
  navigateTo,
}: {
  title: string;
  navigateTo?: string;
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        onClick={() => navigateTo && navigate(navigateTo)}
      >
        {t(title)}
      </Button>
    </Stack>
  );
}
