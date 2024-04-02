import Button from "./Button"
import Checkbox from "./Checkbox"
import InputText from "./InputText"
import RadioButton from "./RadioButton"
import Select from "./Select"
import Trip from "./Trip"
import { useState } from "react"

function Form() {

    const [selectedClass, setSelectedClass] = useState("second");
    const [selectedTickets, setSelectedTickets] = useState("1");
    const [selectedTitle, setSelectedTitle] = useState("They.");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const handleTicketChange = (event) => {
        setSelectedTickets(event.target.value);
    };

    const handleTitleChange = (event) => {
        setSelectedTitle(event.target.value);
    };

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleCheckbox = (event) => {
        const isChecked = event.target.checked;
        setCheckbox(isChecked);
        console.log(checkbox);
    }

    const submitForm = (event) => {
        event.preventDefault();
        try {

            const orders = [];

            let newOrder = {
                class: selectedClass,
                numberOfTickets: parseInt(selectedTickets),
                title: selectedTitle,
                firstName: firstName,
                lastName: lastName,
                approval: checkbox
            }

            if (firstName.length < 1 ) {

                console.log("Du måste skriva in ett förnamn.");
            }
            else if (lastName.length < 1 ) {

                console.log("Du måste skriva in ett efternamn.");
            }
            else if (checkbox === false ) {

                console.log("Du måste godkänna villkoren!");
            } else {

                orders.push(newOrder);
                console.log(orders);
            }


        } catch (error) {
            console.log(error);
        }


    }

    return (
        <form className="booking-form">

            <Trip
                origin="STOCKHOLM"
                departure="10:30"
                destination="GÖTEBORG"
                arrival="14:45"
            />
            <div className="booking-form__selection-wrapper">
                <RadioButton
                    id="secondClass"
                    lClass="booking-form__class-selection"
                    label="2:a klass"
                    name="class"
                    value="second"
                    checked={selectedClass === "second"}
                    onChange={() => setSelectedClass("second")}
                />
                <RadioButton
                    id="firstClass"
                    lClass="booking-form__class-selection"
                    label="1:a klass"
                    name="class"
                    value="first"
                    checked={selectedClass === "first"}
                    onChange={() => setSelectedClass("first")}
                />
                <Select
                    id="ticketNumber"
                    lClass="booking-form__ticket-amount"
                    sClass="booking-form__option-container"
                    oClass="booking-form__option"
                    label="Antal biljetter"
                    name="numberOfTickets"
                    option1="1"
                    option2="2"
                    option3="3"
                    option4="4"
                    option5="5"
                    onChange={handleTicketChange}
                />
                <Select
                    id="title"
                    lClass="booking-form__title"
                    sClass="booking-form__option-container"
                    oClass="booking-form__option"
                    label="Titel"
                    name="title"
                    option1="They."
                    option2="Ms."
                    option3="Mr."
                    onChange={handleTitleChange}
                />
                <InputText
                    id="firstName"
                    lClass="booking-form__name-label"
                    iClass="booking-form__name-input"
                    label="Förnamn"
                    name="firstName"
                    onChange={handleFirstName}
                />
                <InputText
                    id="lastName"
                    lClass="booking-form__name-label"
                    iClass="booking-form__name-input"
                    label="Efternamn"
                    name="lastName"
                    onChange={handleLastName}
                />
                <Checkbox
                    id="terms"
                    lClass="booking-form__checkbox-label"
                    cClass="booking-form__terms-checkbox"
                    label="Godkänner villkoren"
                    name="approval"
                    checked={checkbox}
                    onChange={handleCheckbox}
                />
                <Button
                    bClass="booking-form__submit-button"
                    name="Boka biljetter"
                    onClick={submitForm} />
            </div>
        </form>
    )
}

export default Form