import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function About(){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        formType: 'walker'
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://connorearneybs3221api.azurewebsites.net/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                navigate(-1);
            } else {
                console.error('failed to submit form')
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <h1>Walker Form Submission Page</h1>
            <p>Below is a form that will allow you to submit your details to the database</p>
            <form onSubmit={handleSubmit}>

                <input type="hidden" name="formType" value="walker" />

                <label for="name">Full name:</label><br></br>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input><br></br>

                <input type="submit" value={"Submit"}></input>
            </form>
            

            <button onClick={() => navigate(-1)}>Back</button>
        </>
    );
}