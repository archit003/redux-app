import React from "react";
// import ComponentB from "./ComponentB";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const ComponentA = () => {
  return (
    <div>
      <h1>Redux Data Flow</h1>
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default ComponentA;
