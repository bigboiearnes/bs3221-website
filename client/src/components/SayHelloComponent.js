import { useState } from "react";

export default function SayHelloComponent() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event)
    {
        setInputValue(event.target.value);
    };
return (
    <form>
        <label>Input Value:
        <input type="text" value={inputValue} onChange={handleChange}/>
        </label>
        <p>Hello {inputValue}, please complete the rest of the form.</p>
    </form>

)};