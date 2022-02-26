import React, {useState} from "react";
import "./filterStyle.css";

function FilterDiets(props)
{

    //const [dropDownList, setdropDownList] = useState([]);
    const elements = [
     "Vegan",
     "Vegetarian"
    ];

    const items = [];

    for(const e of elements)
    {
        items.push(<a className = "dropdown-content-unclicked" type="button" key= {e} id = {e}>{e}</a>)
    }

    //window.addEventListener()

    return(
        <div className="dropdown">
            <button className="dropbtn">Diet</button>
            <div className="dropdown-content">
                {items}
            </div>
        </div>
    )
}

export default FilterDiets;