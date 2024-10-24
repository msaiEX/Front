import Datepicker from "react-tailwindcss-datepicker";
const Clander = ({value, setValue}) => {
  return (
    <>
      <Datepicker
        inputClassName="w-full rounded-md focus:ring-0 font-normal bg-white placeholder:text-blue-100 text-white dark:bg-blue-900 dark:placeholder:text-blue-100"
        toggleClassName="absolute bg-green-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
        
    </>
  );
};

export default Clander;