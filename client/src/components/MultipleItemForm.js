import { useState } from "react";

export default function MultipleItemForm() {
    const [formData, setFormData] = useState({name: "",email: "",message: ""});

    function handleChange(event)
    {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
    };

    function handleSubmit(event)
    {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange}/>
            </div>

            <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
            </div>

            <div>
            <button type="submit"Submit></button>
            </div>
        </form>
    );
}