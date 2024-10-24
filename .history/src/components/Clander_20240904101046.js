import Datepicker from "react-tailwindcss-datepicker";
const Clander = ({value, setValue}) => {
  return (
    <>
      <Datepicker
        toggleClassName="absolute bg-green-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        inputClassName="w-full h-[42px] px-2 bg-white text-black border-gray-300 border border-slat-200 rounded-md"
        popoverClassName="bg-white shadow-lg text-black" 

      />
        
    </>
  );
};

export default Clander;