import React, { useContext, useState } from "react"

const ContextPr = React.createContext()

export const useCustomContext = () => {
    return useContext(ContextPr)
}

export const Context = ({children}) => {
    const [setting, setSetting] = useState(true)
    
    return (
        <ContextPr.Provider value={{setting, setSetting}}>
        {children}
        </ContextPr.Provider>
    )
}