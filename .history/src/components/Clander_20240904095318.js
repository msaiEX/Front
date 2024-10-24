import Datepicker from "react-tailwindcss-datepicker";
const Clander = ({value, setValue}) => {
  return (
    <>
      <Datepicker value={value} onChange={(newValue) => setValue(newValue)}
      inputClassName="bg-white"
      />
        
    </>
  );
};

export default Clander;