import React from "react"

function Select(props) {
    return (
        <>
            <label className={props.lClass} htmlFor={props.id}>

                {props.label}

                <select 
                className={props.sClass} 
                name={props.name} 
                id={props.id}
                onChange={props.onChange}
                >

                    <option className={props.oClass} value={props.option1}>
                        {props.option1}
                    </option>

                    <option className={props.oClass} value={props.option2}>
                        {props.option2}
                    </option>

                    {props.option3 && (
                        <option className={props.oClass} value={props.option3}>
                            {props.option3}
                        </option>
                    )}

                    {props.option4 && (
                        <option className={props.oClass} value={props.option4}>
                            {props.option4}
                        </option>
                    )}
                    
                    {props.option5 && (
                        <option className={props.oClass} value={props.option5}>
                            {props.option5}
                        </option>
                    )}

                </select>

            </label>

        </>
    )
}

export default Select