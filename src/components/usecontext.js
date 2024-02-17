import React, { createContext, useState } from "react";
import Component1 from "./component1";

export const userContext = createContext();
const Usecontext = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <userContext.Provider value={{ counter, setCounter }}>
        <Component1 />
      </userContext.Provider>
    </div>
  );
};

export default Usecontext;
