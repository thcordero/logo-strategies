import React, { useState } from "react";
import { useDisplay } from "../Display";

const Services = () => {

    const stateDisplay = useDisplay();

    return (
        <div id="services-section" 
        style={{ display: stateDisplay.services ? "block" : "none" }}>

        <p>This is Services</p>

        </div>

    );
}

export default Services;