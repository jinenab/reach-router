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
function App() {
return(<div>
    <NavBar/>
<Router>
    <Home path="/" exact/>
    <About path="about"/>
    
    <Redirect from="support" to="/" />
    <Support path="support" />

    <User path="user/:id"/>
    <Dash path="dashboard" exact>
        <DashHome path="/" exact/>
        <Team path="team" exact />
        
    </Dash>

    <NotFound default></NotFound>
</Router>

</div>)
      


}

export default App;
