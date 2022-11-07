import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Profile from "./Profile"


//  let's try posting the loginInput to a server so it's accessible always

function LogIn() {

    // const [loginInput, setLoginInput] = useState({});
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    function onEmailTyping(e) {
        setEmailInput(e.target.value)
    }

    function onPasswordTyping(e) {
        setPasswordInput(e.target.value)
    }

    const loginInput = {
        email: emailInput,
        password: passwordInput
    }

    function onClickSubmit() {
        fetch(`http://localhost:9292/inputs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInput),
        }) 
        .then((r) => r.json())
        .then((input) => console.log(input))
    }


    return (
        <div id="logInContainer">
            <h1>what's cooking, good looking?</h1>
            <div id="logInFields">
                email<br></br>
                <input type="text" placeholder="e.g. amber@gmail.com" id="logInTextFields" onChange={onEmailTyping}></input>
                <br></br>
                <br></br>
                password<br></br>
                <input type="password" placeholder="e.g. sushilover123" id="logInTextFields" onChange={onPasswordTyping}></input>
            </div>
            <div onClick={onClickSubmit} >
                {/* <h2 id="logInButton">log in</h2> */}
                <NavLink to="/profile" id="navLinks">
                    <h2 id="logInButton">log in</h2>
                </NavLink>
            </div>
            <p>new to Matchr? sign up <NavLink to="/signup" id="navLinks"><strong>here.</strong></NavLink></p>
        </div>
    )
}

export default LogIn