import React, { useState } from "react";
import { useDisplay } from "./Display";


const Header = () => {

    const stateDisplay = useDisplay();

    return (
        <footer id="footer-section" style={{ display: stateDisplay.footer ? "block" : "none" }}>

        <p>This is the footer</p>

        </footer>

    );
}

export default Header;