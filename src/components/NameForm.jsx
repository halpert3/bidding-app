import React from 'react';


const NameForm = (props) =>
    <form className="Element-spacing">
        <label for="engineername">
            Engineer Name:
            <input type="text" id="engineername" name="engineername" size="30" onChange={props.handleName} />
        </label><br /><br />
        <label for="hourlyrate">
            Hourly Rate:
            <input type="number" id="hourlyrate" name="hourlyrate" size="15" onChange={props.handleName} />
        </label><br />
        <label for="allottedhours">
            Allotted Hours:
            <input type="text" id="allottedhours" name="allottedhours" size="30" onChange={props.handleName} />
        </label><br /><br />
        <button className="Element-spacing" onClick={props.addEngineer}>
            Submit
        </button>

    </form >


export default NameForm