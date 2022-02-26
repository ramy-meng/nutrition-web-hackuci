import React, {useState} from "react";
import FilterAllergies from "./filterAllergies";
import "./filterBar.css"
import FilterDiets from "./filterDiets";
import CaloriesFilter from "./inputfilter";

function Filterbar(props)
{


    return (
        <div className="filterBar">
            < FilterAllergies ></FilterAllergies>
            <FilterDiets></FilterDiets>
            <CaloriesFilter></CaloriesFilter>
        </div>
    )
}

export default Filterbar