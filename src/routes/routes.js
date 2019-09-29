import React from "react";
import App from "../components/App";
import {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";

import Home from "../pages/Home"

const AppRoutes = ()=>{
   return(
    <App>
        <Router>
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
            </Switch>
        </Router>
    </App>
   );
}


export default AppRoutes;