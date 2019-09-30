import React,{Fragment} from "react";

import "../../assets/css/PageNotFound.css";

import img404 from "../../assets/images/4042.png";

const PageNotFound = () =>{
    return(
        <Fragment>
            <div className="ctr-404">
                    <h1>Sorry!, the page was not found ;(</h1>
                <img id="img-404" src={img404} alt=""/>
                <a href="/">Go  to home</a>
            </div>
        </Fragment>
    );
};

export default PageNotFound;