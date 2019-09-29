import React,{Fragment} from "react";

import "../../assets/css/Content.css";

const Content = (props)=>{
    return(
        <Fragment>
            <div className="ctr-content">
                {props.body}
            </div>
        </Fragment>
    );
};

export default Content;