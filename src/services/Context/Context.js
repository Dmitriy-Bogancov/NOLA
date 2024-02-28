import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const ContextPr = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextPr);
};

export const Context = ({ children }) => {
  const [token, setToken] = useState(() => {
    return sessionStorage.getItem("token") ?? "";
  });

  return (
    <ContextPr.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </ContextPr.Provider>
  );
};
Context.propTypes = {
  children: PropTypes.node.isRequired,
};
