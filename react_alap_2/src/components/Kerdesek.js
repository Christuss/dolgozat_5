import DataService from "../api/Dataservice"
import { useState } from "react";
import Kerdes from "./Kerdes";

export default function Kerdesek () {
    const [adat, setAdat] = useState([""]);
    const [pontok, setPontok] = useState(0);
    const DS = new DataService(); 

    if (adat[0] == "") {
        DS.get("/tesztek", setAdatok);
    }

    function setAdatok(data) {
        setAdat(data.data);
    }

    return (
        <div className="container">
            <p>Kérdések:</p>
            {adat.map((elem, key) => 
                <Kerdes elem = {elem} setPontok = {setPontok} pontok = {pontok}/>
            )}
            <p>Pontok: {pontok}</p>
        </div>
    )
}