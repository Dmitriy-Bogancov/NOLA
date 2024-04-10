import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ContextPr = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextPr);
};

export const Context = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <ContextPr.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ContextPr.Provider>
  );
};
Context.propTypes = {
  children: PropTypes.node.isRequired,
};
