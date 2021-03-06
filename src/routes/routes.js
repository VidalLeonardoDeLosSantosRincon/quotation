import React from "react";
import App from "../components/App";
import {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";

import Home from "../pages/Home";
import Rates from "../pages/Rates";
import PageNotFound from "../components/global/PageNotFound";

const AppRoutes = ()=>{
   return(
    <App>
        <Router>
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/rates" component={Rates}/>
                    <Route component={PageNotFound}/>
            </Switch>
        </Router>
    </App>
   );
}


export default AppRoutes;