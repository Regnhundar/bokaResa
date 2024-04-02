import React from "react"

function InputText(props) {
    return (
        <label className={props.lClass} htmlFor={props.id}>
            {props.label}
            <input 
            className={props.iClass} 
            type="text" 
            name={props.name} 
            id={props.id} 
            placeholder="Skriv här..."
            onChange={props.onChange}
            />
        </label>
    )
}

export default InputText