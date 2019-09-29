import React, {Component, Fragment}  from "react";

import "../assets/css/Home.css";

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Fragment>
                <div className="ctr-home">
                    <h4>Home</h4>
                </div>
            </Fragment>
        );
    }
}
export default Home;