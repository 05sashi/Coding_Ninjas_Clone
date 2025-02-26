import React, { createContext } from "react";
export const CodingNinjasContext = createContext();

function ContextAPI(props) {

  function scroll(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <CodingNinjasContext.Provider value={{ scroll }}>
      {props.children}
    </CodingNinjasContext.Provider>
  );
}

export default ContextAPI;
