import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./routes/Home";
import Services from "./routes/Services";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project1 from "./routes/Project1";
import Project2 from "./routes/Project2";
import {ProvideDisplay} from "./Display";

const App = () => {

  return (
    
    <ProvideDisplay>
      <div id="siteWrapper">

        <Header />

        <main id="page">

          <Router>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/services">
                <Services />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/project1">
                <Project1 />
              </Route>
              <Route path="/project2">
                <Project2 />
              </Route>

            </Switch>

          </Router>

        </main>

        <Footer />

      </div>

    </ProvideDisplay>

  );
}

export default App;