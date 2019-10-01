import React, {Fragment} from "react";

import CbBank from "../assets/images/central_bank.png";
import DpBank from "../assets/images/dp_bank.jpg";
import LhBank from "../assets/images/lh_bank.png";
import BhdBank from "../assets/images/bhd_bank.png";
import ProgressBank from "../assets/images/progress_bank.jpg";
import BrBank from "../assets/images/br_bank.jpg";

const HomeRatesGrid = (props) => {
    return(
        <Fragment>
            <h1>Banks Rates List</h1>
            <div className="ctr-home-rates-box">
                <div className="rates-items">
                    <img src={CbBank} alt="central_bank" title="Banco Central Dominicano"/>
                </div>
                <div className="rates-items">
                    <img src={DpBank} alt="popular_bank" title="Banco Popular Dominicano"/>
                </div>
                <div className="rates-items">
                    <img src={LhBank} alt="lopezHaro_bank" title="Banco Lopez De Haro"/>
                </div>
                <div className="rates-items">
                    <img src={BhdBank} alt="bhd_bank" title="Banco BHD León"/>
                </div>
                <div className="rates-items">
                    <img src={ProgressBank} alt="progress_bank" title="Banco Progreso"/>
                </div>
                <div className="rates-items">
                    <img src={BrBank} alt="banreservas_bank" title="Banco Banreservas"/>
                </div>
            </div>
        </Fragment>
    );
};

export default  HomeRatesGrid;