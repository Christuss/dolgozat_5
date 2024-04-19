import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DataService from '../api/Dataservice';


export default function CustomDropdown() {

  const [adat, setAdat] = useState([""]);
    const DS = new DataService(); 

    if (adat[0] == "") {
        DS.get("/kategoria", setAdatok);
    }

    function setAdatok(data) {
        setAdat(data.data);
    }

    return (
        <Dropdown className="dropdown">
      <select>
      
        {adat.map((elem) => {
          <option className="dropdownMenu">{elem.kategorianev}</option>
        })}
        
      
      </select>

      
    </Dropdown>
    )
}

