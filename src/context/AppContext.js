import React,{createContext,useState} from "react";

export const AppContext=createContext();

export const AppProvider=({children})=>{

    const [theme,setTheme]=useState("light");
    const [user,setUser]=useState(null);

    return(
        <AppContext.Provider value={{theme,setTheme,user,setUser}}>
            {children}
        </AppContext.Provider>
    )
}

