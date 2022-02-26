import React, {useState} from "react";
import "./filterStyle.css";

function FilterAllergies(props)
{

    //const [dropDownList, setdropDownList] = useState([]);
    const elements = [
        "Alcohol Free",
        "Celery Free",
        "Dairy Free",
        "Egg Free",
        "Fish Free",
        "FODMAP Free",
        "Gluten Free",
        "Lupine Free",
        "Mollusk Free",
        "Mustard Free",
        "Peanut Free",
        "Pork Free",
        "Shellfish Free",
        "Soy Free",
        "Sulfite Free",
        "Tree Nut Free",
        "Wheat Free"
    ];

    const items = [];

    for(const e of elements)
    {
        items.push(<a type="button" key= {e} id = {e}>{e}</a>)
    }

    //window.addEventListener()

    return(
        <div className="dropdown">
        <button className="dropbtn">Allergy</button>
        <div className="dropdown-content">
            {items}
        </div>
        </div>
    )
}

export default FilterAllergies;