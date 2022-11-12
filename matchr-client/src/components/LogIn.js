import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import NewProfile from "./NewProfile"

function LogIn() {

    // const [loginInput, setLoginInput] = useState({});
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [profileMatch, setProfileMatch] = useState({})
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/users`)
        .then(r => r.json())
        .then(data => setUserData(data))
    }, [])

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
    
    // this file should handle sending the log in status

    function onClickSubmit() {
        const correctCredentials = userData.filter(person => {
            return person.email == loginInput.email && person.password == loginInput.password
        })[0]

        setProfileMatch(correctCredentials)

        console.log(correctCredentials)
        console.log(userData)
        console.log(loginInput)

        if (correctCredentials != null) {
            fetch(`http://localhost:9292/users/${correctCredentials.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: correctCredentials.first_name,
                    gender: correctCredentials.gender,
                    age: correctCredentials.age,
                    location: correctCredentials.location,
                    interest_1: correctCredentials.interest_1,
                    interest_2: correctCredentials.interest_2,
                    interest_3: correctCredentials.interest_3,
                    profile_photo_link: correctCredentials.profile_photo_link,
                    email: correctCredentials.email,
                    password: correctCredentials.password,
                    logged_in: true
                }),
            })
            .then(r => r.json())
            .then(data => console.log(data))
        }

    }


    const notLoggedIn = (
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
            <div onClick={onClickSubmit}>
                <NavLink to="/profile" id="navLinks">
                    <h2 id="logInButton">log in</h2>
                </NavLink>
            </div>
            <p>new to Matchr? sign up <NavLink to="/signup" id="navLinks"><strong>here.</strong></NavLink></p>
        </div>
    )

    
//  i need to just put new profile and let it render if there is a profile or not and it should remember
// if profileMatch resets everytime, how can profile even remember and then generate everything

    return (
        <div>
            {/* {loginState ? <NewProfile profileMatch={profileMatch}/> : notLoggedIn} */}
            {notLoggedIn}
            {/* <NewProfile /> */}
        </div>
    )
}

export default LogIn