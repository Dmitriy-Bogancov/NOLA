import React, { useContext, useState } from "react";

const ContextPr = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextPr);
};

export const Context = ({ children }) => {
  const [setting, setSetting] = useState(true);
  const [token, setToken] = useState(() => {
    return sessionStorage.getItem("token") ?? "";
  });

  return (
    <ContextPr.Provider
      value={{
        setting,
        setSetting,
        token,
        setToken,
      }}
    >
      {children}
    </ContextPr.Provider>
  );
};
