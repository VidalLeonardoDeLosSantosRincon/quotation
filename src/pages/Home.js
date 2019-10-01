import React, {Component, Fragment}  from "react";

import "../assets/css/Home.css";

import Loading from "../components/global/Loading";
import HomeRatesGrid from "../components/HomeRatesGrid";

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Fragment>
                <div className="ctr-home">
                    <HomeRatesGrid/>
                </div>
            </Fragment>
        );
    }
}
export default Home;