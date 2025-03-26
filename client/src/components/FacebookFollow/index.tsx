import { useEffect } from "react";
import { useTranslation } from "react-i18next";

declare global {
  interface Window {
    FB: any;
  }
}

const FacebookFollow = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: "v17.0",
          });
          window.FB.XFBML.parse(); // Load lại plugin sau khi init
        }
      };
    } else if (window.FB) {
      window.FB.XFBML.parse(); // Load lại nếu SDK đã có
    }
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="w-full">
        <h2 className="text-lg font-bold mb-4 text-white pt-6 ">
          {t("followus")}
        </h2>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/AGUDHAG"
          data-tabs=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false"
          style={{ width: "95%" }}
        >
          <blockquote
            cite="https://www.facebook.com/AGUDHAG"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/AGUDHAG">An Giang University</a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default FacebookFollow;
