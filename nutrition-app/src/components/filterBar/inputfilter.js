import React from 'react'
import "./inputfilterStyle.css"

function CaloriesFilter(props)
{



    return (
        <div className='inputFilter'>
            <form id = 'caloriesform'>
                <label id = 'calorieslabel'>
                    <input id = 'caloriesinput' type="text" placeholder="Calories"  />
                </label>
            </form>
        </div>

    )
}

export default CaloriesFilter