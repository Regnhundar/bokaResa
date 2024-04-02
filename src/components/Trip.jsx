import MainTitle from "./MainTitle"

function Trip(props) {
    return (
        <div className="booking-form__trip">
            <MainTitle
                headline="ÅKA TÅG"
                hClass="booking-form__headline"
            />
            <div className="booking-form__info-wrapper">
                <div className="booking-form__left-wrapper">
                    <h2 className="booking-form__location">{props.origin}</h2>
                    <p className="booking-form__time" >{props.departure}</p>
                </div>
                <img className="booking-form__arrow" src="./src/assets/arrow.svg" alt="An arrow pointing towards the destination." />
                <div className="booking-form__right-wrapper">
                    <h2 className="booking-form__location">{props.destination}</h2>
                    <p className="booking-form__time">{props.arrival}</p>
                </div>
            </div>
        </div>
    )
}

export default Trip