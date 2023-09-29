import React from "react";
import "./Button.css";

const Button = (props) => {
    let classes = "button "
    classes += props.operation ? "operation" : ""
    classes += props.double ? "double" : ""
    classes += props.triplo ? "triplo" : ""
    
    return (
        <button
            onClick={e => props.click && props.click(props.innerHTML)} 
            className={classes}>
            {props.label}
        </button>
    )

}



export default Button;