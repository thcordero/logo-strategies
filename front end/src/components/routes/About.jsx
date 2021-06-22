import React, { useState } from "react";
import { useDisplay } from "../Display";


const About = () => {

    const stateDisplay = useDisplay();

    return (
        <div id="about-section"
        style={{ display: stateDisplay.about ? "block" : "none" }}>

        <p>This is About</p>

        </div>

    );
}

export default About;