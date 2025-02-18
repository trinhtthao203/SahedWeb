const Heading = ({ title, subtitle }: any) => {
  return (
    <div className=" text-center m-10 max-w-[600px] mx-auto space-y-2">
      <h1 className=" text-2xl font-bold lg:text-3xl uppercase text-blue-950">
        {title}
      </h1>
      <p className=" text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};
export default Heading;
