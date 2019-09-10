import React from 'react';
import {render} from "react-dom"
import {Router ,Link,Redirect,Match} from "@reach/router"
import Home from "./components/Home"
import HomeNav from "./components/HomeNav"
import About from "./components/About"
import Support from "./components/Support"
import NavBar from "./components/NavBar"
import User from "./components/User"
import Dash from './components/Dash';
import DashboardNav from './components/DashboardNav';
import DashHome from './components/DashHome';
import Team from './components/Team';
import NotFound from './components/NotFound';
import  "./style.scss"
function App() {
return(<div>
    
    <NavBar className="NavBar" >
        <Router primary={false}>
            <HomeNav path="/*" />
            <DashboardNav path="dashboard/*" /> 
        </Router>
    </NavBar>
    <Router className="Router">
        <Home path="/" exact/>
        <About path="about" exact/>
        <Support path="support" exact />
        <User path="user/:id" exact/>
        <Dash className="Dash" path="dashboard" exact>
            <DashHome path="/" exact/>
            <Team path="team/*" exact /> 

        </Dash>
        <NotFound default></NotFound>
    </Router>

</div>)
      


}

export default App;
