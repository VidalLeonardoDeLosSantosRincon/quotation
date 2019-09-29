import React,{Fragment} from "react";

import "../../assets/css/Loading.css";

import ratesIcon from "../../assets/images/money.png";

const Loading = (props) =>{
    return(
        <Fragment>
            <div className="ctr-loading">
                <div className="ctr-loading-img-box">
                    <img id="icon-loading" src={ratesIcon} alt="rates_icon"/>
                </div>
                <h4>Loading</h4>
            </div>
        </Fragment>
    );
};

export default Loading; 