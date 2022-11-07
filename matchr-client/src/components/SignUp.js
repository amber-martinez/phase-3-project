import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [interest1, setInterest1] = useState("");
    const [interest2, setInterest2] = useState("");
    const [interest3, setInterest3] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    function onFirstNameChange(e) {
        setFirstName(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function onGenderChange(e) {
        setGender(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function onAgeChange(e) {
        setAge(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function onLocationChange(e) {
        setLocation(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function onProfilePicChange(e) {
        setProfilePic(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function handleInterest1(e) {
        setInterest1(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function handleInterest2(e) {
        setInterest2(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function handleInterest3(e) {
        setInterest3(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function onEmailChange(e) {
        setEmail(e.target.value)
    }

    function onPasswordChange(e) {
        setPassword(e.target.value)
    }

    function onSignUpSubmit(event) {
        event.preventDefault();
        setLoggedIn(true)

        const profileData = {
            first_name: firstName,
            gender: gender,
            age: age,
            location: location,
            profile_photo_link: profilePic,
            interest_1: interest1,
            interest_2: interest2,
            interest_3: interest3,
            email: email,
            password: password,
            logged_in: loggedIn
        };

        fetch(`http://localhost:9292/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData),
        })
        .then((r) => r.json())
        .then((userProfile) => console.log(userProfile))

    }

    let newUserSignUp = (
        <div id="newSignUp">
            <p id="signUpHeader"><strong>sign up for matchr.</strong></p>
            <form id="signUpForm">
                <label id="signUpLabels">
                <input type="text" name="name" id="signUpInputs" value={firstName} placeholder="first name" onChange={onFirstNameChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                    <select name={gender} id="signUpInputs" value={gender} onChange={onGenderChange}>
                        <option value="" disabled selected >gender</option>
                        <option class="signUpOption">female</option>
                        <option class="signUpOption">male</option>
                        <option class="signUpOption">transgender</option>
                        <option class="signUpOption">non-binary</option>
                        <option class="signUpOption">prefer not to answer</option>
                    </select>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                <input type="text" name="age" id="signUpInputs" value={age} placeholder="age" onChange={onAgeChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                <input type="text" name="location" id="signUpInputs" value={location} placeholder="location" onChange={onLocationChange}/>
                </label>
                <br></br>
                <p id="signUpLabels">select three interests 💡</p>
                <label id="signUpLabels">
                    <select required name={interest1} id="signUpInputs" value={interest1} onChange={handleInterest1}>
                        <option value="" disabled selected>interest</option>
                        <option name="baking">baking</option>
                        <option>biking</option>
                        <option>concerts</option>
                        <option>cooking</option>
                        <option>drinking</option>
                        <option>gaming</option>
                        <option>gardening</option>
                        <option>hiking</option>
                        <option>pilates</option>
                        <option>pottery</option>
                    </select>
                </label>
                <br></br>
                <label id="signUpLabels">
                    <select required name="name" id="signUpInputs" value={interest2} onChange={handleInterest2}>
                        <option value="" disabled selected>interest</option>
                        <option>baking</option>
                        <option>biking</option>
                        <option>concerts</option>
                        <option>cooking</option>
                        <option>drinking</option>
                        <option>gaming</option>
                        <option>gardening</option>
                        <option>hiking</option>
                        <option>pilates</option>
                        <option>pottery</option>
                    </select>
                </label>
                <br></br>
                <label id="signUpLabels">
                    <select required name="name" id="signUpInputs" value={interest3} onChange={handleInterest3}>
                        <option value="" disabled selected>interest</option>
                        <option>baking</option>
                        <option>biking</option>
                        <option>concerts</option>
                        <option>cooking</option>
                        <option>drinking</option>
                        <option>gaming</option>
                        <option>gardening</option>
                        <option>hiking</option>
                        <option>pilates</option>
                        <option>pottery</option>
                    </select>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                <input type="text" name="profilePic" id="signUpInputs" value={profilePic} placeholder="profile photo link" onChange={onProfilePicChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                <input type="text" name="email" id="signUpInputs" value={email} placeholder="email" onChange={onEmailChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                <input type="password" name="password" id="signUpInputs" value={password} placeholder="password" onChange={onPasswordChange}/>
                </label>
                <br></br>
                <br></br>
                <NavLink to="/login" id="navLinks">
                    <p id="signUpSubmit" onClick={onSignUpSubmit}>submit</p>
                {/* <input type="submit" value="submit" id="signUpSubmit" onClick={onSignUpSubmit}></input> */}
                </NavLink>
            </form>
        </div>
    )

        // {newUserSignUp} is the chunk of code for the signup page

    return (
        <div>
            {/* {loggedIn ? null : newUserSignUp } */}
            {newUserSignUp}
        </div>
    )

}

export default SignUp