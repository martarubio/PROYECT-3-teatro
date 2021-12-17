import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import './Home.css'
import './HistoryPage.css'

const History = () => {
    return (

        <div className="history">
            <h2><center>Obras que estuvieron en cartel en Madrid y de gira por España</center></h2>
            <div className=" cont-portadas">
                <img src="./images/lt_dalloway.jpg" alt="mrs.dallaway" />
                <img src="./images/lt_mago.jpg" alt="elmago" />
                <img src="./images/juan_tenorio.jpg" alt="donjuantenorio" />
                <img src="./images/lt_cartografo.jpg" alt="elcartografo" />
                <img src="./images/laaveria.jpg" alt="laaveria" />
                <img src="./images/cartel_humo.jpg" alt="humo" />
                <img src="./images/lt_azules.jpg" alt="intensamenteazules" />
                <img src="./images/Reikiavik_cartel.jpg" alt="reikiavik" />
            </div>

        </div>

    )
}

export default History