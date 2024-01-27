import React, { useContext, useState } from "react";

const ContextPr = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextPr);
};

export const Context = ({ children }) => {
  const [setting, setSetting] = useState(true);
  const [addLink, setAddLink] = useState([]);
  const [auth, setAuth] = useState(false);

  return (
    <ContextPr.Provider
      value={{ setting, setSetting, addLink, setAddLink, auth, setAuth }}
    >
      {children}
    </ContextPr.Provider>
  );
};
