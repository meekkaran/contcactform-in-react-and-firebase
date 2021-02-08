import React from 'react';
import "./app.css";
import { db } from "./Firebase";

const  Contact =() =>{
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts").add({
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert("message has been submitted");
        })
        .catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="app">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact form</h1>

            <label>Name</label>
            <input placeholder="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}/>

            <label>Email</label>
            <input placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>

            <label>Message</label>
            <textarea placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}>
              </textarea>

            <button type="submit">Submit</button>
            
        </form>
        </div>
    )
}

export default Contact
