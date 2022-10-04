import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const useTokenContext = () => {
    const context = useContext(Context)
    if(!context) throw new Error('No existe un proveedor de contexto')
    return context
}

export const UserContextProvider = ({ children }) =>{
    const [tokenContext, setTokenContext] = useState(() =>
    localStorage.getItem("token")
    );

    const [loggedUser, setLoggedUser] = useState({});
    
    return (
        <Context.Provider value={{ tokenContext, setTokenContext, loggedUser, setLoggedUser }}>
            {children}
        </Context.Provider>
    );
}


