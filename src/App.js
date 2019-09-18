import React from 'react';
import {Router ,Location} from "@reach/router"
import Home from "./components/Home"
import HomeNav from "./components/HomeNav"
import About from "./components/About"
import Support from "./components/Support"
import SideBar from "./components/SideBar"
import User from "./components/User"
import Dash from './components/Dash';
import DashboardNav from './components/DashboardNav';
import DashHome from './components/DashHome';
import Team from './components/Team';
import Inovices from './components/Invoices'
import Inovice from './components/Invoice'
import NotFound from './components/NotFound';
import LearnRedux from './components/Redux';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import  "./style.scss"
function App() {
return(<div>
<NavBar></NavBar>
    <SideBar  >
    <Location>
  {props => 
 // console.log(props.location)
    props.location.pathname.search("dashboard") ===1?
 <DashboardNav/>: <HomeNav/>
 }

</Location>
    </SideBar>
    <Router className="Router">
        <Home path="/" exact/>
        <About path="about" exact/>
        <Support path="support" exact />
        <User path="user"></User>
        <User path="user/:id" exact />
        <Inovices path="inovices" exact ></Inovices>
        <Inovice path="inovice/:id" exact ></Inovice>
        <LearnRedux path="redux" exact >
            <Counter path="counter/" exact />
        </LearnRedux>   
        <Dash className="Dash" path="dashboard" exact>
            <DashHome path="/" exact/>
            <Team path="team/*" exact /> 
        </Dash>
        <NotFound default></NotFound>
    </Router>
</div>)
}
export default App;
