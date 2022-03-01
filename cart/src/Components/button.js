import React from "react";
const Button=(props)=>{
    var {color,contents,classN,contentsText}=props;
    return (
        <button className={"btn_"+classN+" btn back_"+color}>
            {contents}<span>{contentsText}</span>
        </button>
    )
}
export default Button;