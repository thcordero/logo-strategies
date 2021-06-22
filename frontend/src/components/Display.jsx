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

    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(true);
    const [services, setServices] = useState(true);
    const [contact, setContact] = useState(true);
    const [footer, setFooter] = useState(true);

    

    return {
        home,
        about,
        services,
        contact,
        footer,
        setHome,
        setAbout,
        setServices,
        setContact,
        setFooter,

    };
}



export { ProvideDisplay, useDisplay };