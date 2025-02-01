import React from "react";
import { useDispatch } from "react-redux";
import { updateInput } from "./actions";

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateInput(event.target.value));
  };

  return (
    <div>
      <input type="text" placeholder="Type something..." onChange={handleChange} />
    </div>
  );
};

export default ComponentB;
