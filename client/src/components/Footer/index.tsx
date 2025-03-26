import { useTranslation } from "react-i18next";
import FeedbackForm from "../FeedBack";
import FacebookFollow from "../FacebookFollow";
import Grid from "@mui/material/Grid";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className=" bg-gray-800 px-4 md:px-16 lg:px-28">
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        className="w-full"
      >
        <Grid item xs={12} md={4}>
          <h2 className="text-lg font-bold mb-4 text-white pt-10">
            {t("contact")}
          </h2>
          <ul>
            <li>
              <a href="/#about" className="hover:underline text-gray-300">
                {t("address")}
              </a>
            </li>
            <li>
              <a href="/#news" className="hover:underline text-gray-300">
                {t("phone")}
              </a>
            </li>
            <li>
              <a href="/#partners" className="hover:underline text-gray-300">
                {t("mail")}
              </a>
            </li>
            <li>
              <a href="/#footer" className="hover:underline text-gray-300">
                {t("fax")}
              </a>
            </li>
          </ul>
        </Grid>

        {/* Facebook Follow - Full width trên mobile, chia 4 cột trên màn lớn */}
        <Grid item xs={12} md={4} className="flex justify-center">
          <FacebookFollow />
        </Grid>

        <Grid item xs={12} md={4}>
          <FeedbackForm />
        </Grid>

        <Grid item xs={12}>
          <div className="border-t border-gray-600 mt-6 pt-6 p-4 text-gray-300 text-center">
            <p>{t("copyright")}</p>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
