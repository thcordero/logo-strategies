import React, { useContext, createContext, useState } from "react";


const displayContext = createContext();
const useDisplay = () => {
    return useContext(displayContext);
}



const ProvideDisplay = ({ children }) => {
    const display = useProvideDisplay();
    return (
        <displayContext.Provider value={display}>
            {children}
        </displayContext.Provider>
    );
}

const useProvideDisplay = () => {

    const [page, setPage] = useState(true);
    const [footer, setFooter] = useState(true);

    

    return {
        page,
        footer,
        setPage,
        setFooter,

    };
}



export { ProvideDisplay, useDisplay };