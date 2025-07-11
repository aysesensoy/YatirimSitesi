import { useState } from "react";

const SayiInput =() => {
    const [value, setValue] = useState('');
    const maxDeger = 1000000000000;

     const handleChange = (e) => {
    let girilenDeger = e.target.value;
    if (Number(girilenDeger) > maxDeger) {
      girilenDeger = maxDeger;
    }
    setValue(girilenDeger);
  };

   return (
    <div>
      <input
        type="number"
        min="1"
        max={maxDeger}
        value={value}
        onChange={handleChange}
        placeholder="TL - Max 12 hane"
      />
    </div>
  );
};

export default SayiInput;