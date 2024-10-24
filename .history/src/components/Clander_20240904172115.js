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