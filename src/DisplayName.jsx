import React, { useState } from "react";

export default function DisplayName() {
    const [name, setName] = useState({
        first: "",
        last: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setName(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <>
            <h1>Full Name Display</h1>
            <br />
            <form onSubmit={(e) => handleSubmit(e)}>
                <span>First Name:</span>
                <input type="text" name="first" value={name.first} onChange={(e) => handleChange(e)} required /> <br />
                <span>Last Name:</span>
                <input type="text" name="last" value={name.last} onChange={(e) => handleChange(e)} required />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            {submitted ? <p>Full Name: {name.first} {name.last}</p> : <p>Full Name:</p>}
        </>
    );
}
