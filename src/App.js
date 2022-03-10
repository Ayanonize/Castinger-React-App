import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import News from "./pages/News";
import About from "./pages/About";
import Percentage from "./pages/Percentage";
import PageNotFound from "./components/Page404";
import Footer from "./components/Footer";
import JoinOurTeam from "./pages/JoinOurTeam";
import Contact from "./pages/Contact";


function App() {

  const ApiKey = "5e26b19cea8a4cfe840b6f50155b4d96"

  return (
    <>

      <Router>
        <NavBar></NavBar>
        <div className="container my-4">

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route exact path="/">
              <Home />


            </Route>

            <Route exact path="/News">
              <News ApiKey={ApiKey}></News>
            </Route>

            <Route exact path="/Weather">
              <Weather></Weather>
            </Route>

            <Route exact path="/About">
              <About />
            </Route>

            <Route exact path="/Contact">
              <Contact />
            </Route>

            <Route exact path="/JoinOurTeam">
              <JoinOurTeam />
            </Route>

            <Route exact path="/Percentage">
              <Percentage />
            </Route>

            <Route component={PageNotFound} />

          </Switch>
        </div>
        <Footer />

      </Router>




    </>


  );
}

export default App;
