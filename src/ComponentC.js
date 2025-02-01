import React from "react";
import { useSelector } from "react-redux";

const ComponentC = () => {
  const inputValue = useSelector((state) => state.inputValue);
  
  console.log("Redux State:", inputValue); // Debugging statement

  return (
    <div>
      <h2>Entered Text: {inputValue}</h2>
    </div>
  );
};

export default ComponentC;
