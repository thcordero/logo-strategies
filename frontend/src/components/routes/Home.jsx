import React, { useState } from "react";
import { useDisplay } from "../Display";


const Home = () => {

    const stateDisplay = useDisplay();

    return (
        <div id="home-section"
            style={{ display: stateDisplay.home ? "block" : "none" }}>

            {/* <div className="intro-section">

                <h2> Welcome to Logo Strategies </h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, lorem condimentum lacinia cursus, odio mi finibus lacus, in finibus ante nisi in magna. Pellentesque suscipit augue turpis, ac sodales velit dignissim at. Sed faucibus, enim sed pellentesque bibendum, ipsum nisi vestibulum risus, at vestibulum nibh orci id nisi. Etiam suscipit eros sit amet lectus tincidunt, luctus vulputate magna consequat. Morbi et ex sagittis, consequat nunc sed, bibendum massa. Curabitur sagittis, lorem et porttitor consequat, metus justo ornare augue, ac ultrices dui enim sit amet neque.</p>


            </div> */}
            <div className="row1">
                <div className="project1">project1</div>
                <div className="project2">project2</div>
            </div>
            <div className="row2">
                <div className="project3">project3</div>
                <div className="project4">project4</div>
            </div>

        </div>

    );
}

export default Home;