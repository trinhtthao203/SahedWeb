import { useTranslation } from "react-i18next";

const Heading = ({ title, subtitle }: any) => {
  const { t } = useTranslation();
  return (
    <div className=" text-center m-10 max-w-[600px] mx-auto space-y-2">
      <h1 className=" text-2xl font-bold lg:text-3xl uppercase text-blue-950">
        {t(`${title}`)}
      </h1>
      <p className=" text-xs text-gray-400">
        {" "}
        {subtitle ? t(`${subtitle}`) : subtitle}
      </p>
    </div>
  );
};
export default Heading;
