import React,{Component, Fragment} from "react";

import "../../assets/css/Header.css"; 
import ratesIcon from "../../assets/images/rates.png";

class Header extends Component{
    render(){
        return(
            <Fragment>
                <div className="ctr-header">
                    <div className="header">
                        <span id="logo-box">
                            <img src={ratesIcon} alt="rates_logo"/>
                        </span>
                        <span id="menu-box">
                            <ul id="menu">
                                <a href="/"><li className="menu-item">Home</li></a>
                                <a href="/rates"><li className="menu-item">Rates</li></a>
                                <a href="/calculate"><li className="menu-item">Calculate</li></a>
                            </ul>
                        </span>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Header;