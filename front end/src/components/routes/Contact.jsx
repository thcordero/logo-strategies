import React, { useState } from "react";
import { useDisplay } from "../Display";


const Contact = () => {
    
    const stateDisplay = useDisplay();

    return (
        <div id="contact-section"
            style={{ display: stateDisplay.contact ? "block" : "none" }}>

            <p>This is Contact</p>

        </div>

    );
}

export default Contact;