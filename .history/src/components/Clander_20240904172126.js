import Datepicker from "react-tailwindcss-datepicker";
const Clander = ({value, setValue}) => {
  const handleDateChange = (newValue) => {
    // newValue가 startDate와 endDate를 포함하는지 확인
    console.log("Selected dates:", newValue);
    if (newValue && newValue.startDate && newValue.endDate) {
      setValue(newValue);
    }
  };
  return (
    <>
      {/* <Datepicker
        primaryColor={"emerald"}
        // toggleClassName="absolute bg-green-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        inputClassName="w-full h-[42px] px-2 bg-white text-black border-gray-300 border border-slate-200 rounded-md"
      /> */}
      <Datepicker
        primaryColor={"emerald"}
        value={value}
        onChange={handleDateChange}
        inputClassName="w-full h-[42px] px-2 bg-white text-black border-gray-300 border border-slate-200 rounded-md"
      />
    </>
  );
};

export default Clander;