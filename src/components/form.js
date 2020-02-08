import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function handleChange(date){
    console.log(date);
};

const Form = (props) => {
    return (
        <form className="barber-form">
            <h3 className="barber-form__title">{props.title}</h3>
            <div className="input-wrapper">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
            </div>

            <div className="input-wrapper">
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Contact Number" />
            </div>

            <div className="input-wrapper">
                <select className="barber-select">
                    <option value="default">Select Barber</option>
                </select>

                <select className="service-select">
                    <option value="default">Select Service</option>
                </select>
            </div>

            <div className="input-wrapper">
                <DatePicker selected={new Date()} onChange={handleChange()} />

                <select className="time-select">
                    <option value="default">Select Time</option>
                </select>
            </div>

            <div className="input-wrapper input-wrapper--f-w">
                <input type="text" placeholder="Select any service." />
            </div>

            <button className="barber-form__button">book appointment</button>

            <div className="input-wrapper--f-w hide">
                <input type="number" placeholder="Price" />
            </div>
        </form>
    );
}




export default Form;