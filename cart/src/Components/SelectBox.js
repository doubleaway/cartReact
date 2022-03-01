import React from "react";

const SelectBox=({select})=>{
  
    let selectBox=select.map(select=><option key={select}>{select}</option>)

    return(
        <select>
            {selectBox}
        </select>
    )
}
export default SelectBox;