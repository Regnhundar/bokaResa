import React from "react"

function RadioButton(props) {
    
    return (
        <label htmlFor={props.id} className={props.lClass}>
            <input
                className="booking-form__radio-select"
                type="radio"
                id={props.id}
                name={props.name}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.label}
        </label>
    )
}

export default RadioButton