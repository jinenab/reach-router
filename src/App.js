import React from 'react';
import {render} from "react-dom"
import {Router ,Link,Redirect} from "@reach/router"
import Home from "./components/Home"
import About from "./components/About"
import Support from "./components/Support"
import NavBar from "./components/NavBar"
import User from "./components/User"
import Dash from './components/Dash';
import DashHome from './components/DashHome';
import Team from './components/Team';
import NotFound from './components/NotFound';
import  "./style.scss"
function App() {
return(<div>
    <div>

    </div>
    <NavBar className="NavBar" />
    <Router className="Router">
        <Home path="/" exact/>
        <About path="about" exact/>
        <Support path="support" exact />
        <User path="user/:id" exact/>
        <Dash path="dashboard" exact>
            <DashHome path="/" exact/>
            <Team path="team" exact /> 
        </Dash>
        <NotFound default></NotFound>
    </Router>

</div>)
      


}

export default App;
