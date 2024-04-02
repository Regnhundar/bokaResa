import React from "react"

function Checkbox(props) {

    return (
        <label className={props.lClass} htmlFor={props.id}>
            <input
                className={props.cClass}
                type="checkbox"
                name={props.name}
                id={props.id}
                onChange={props.onChange}
            />

            {props.label}
            
        </label>
    )
}

export default Checkbox