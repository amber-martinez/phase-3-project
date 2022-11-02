import React, { useState } from 'react';

function SignUp() {

    const [ifUser, setIfUser] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [interest1, setInterest1] = useState('baking');
    const [interest2, setInterest2] = useState('baking');
    const [interest3, setInterest3] = useState('baking');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    function onFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function onGenderChange(e) {
        setGender(e.target.value)
    }

    function onAgeChange(e) {
        setAge(e.target.value)
    }

    function onLocationChange(e) {
        setLocation(e.target.value)
    }

    function onProfilePicChange(e) {
        setProfilePic(e.target.value)
    }

    function handleInterest1(e) {
        setInterest1(e.target.value)
    }

    function handleInterest2(e) {
        setInterest2(e.target.value)
    }

    function handleInterest3(e) {
        setInterest3(e.target.value)
    }

    function onEmailChange(e) {
        setEmail(e.target.value)
    }

    function onPasswordChange(e) {
        setPassword(e.target.value)
    }

    function onSignUpSubmit(event) {
        event.preventDefault();
        setIfUser(true);

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

        fetch(`http://localhost:3000/users`, {
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
                first name:
                <input type="text" name="name" id="signUpInputs" value={firstName} onChange={onFirstNameChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                    gender: 
                    <select name={gender} id="signUpInputs" value={gender} onChange={onGenderChange}>
                        <option>female</option>
                        <option>male</option>
                        <option>transgender</option>
                        <option>non-binary</option>
                        <option>prefer not to answer</option>
                    </select>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                age:
                <input type="text" name="age" id="signUpInputs" value={age} onChange={onAgeChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                location:
                <input type="text" name="location" id="signUpInputs" value={location} onChange={onLocationChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                    interest: 
                    <select name={interest1} id="signUpInputs" value={interest1} onChange={handleInterest1}>
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
                <br></br>
                <label id="signUpLabels">
                    interest:
                    <select name="name" id="signUpInputs" value={interest2} onChange={handleInterest2}>
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
                    interest: 
                    <select name="name" id="signUpInputs" value={interest3} onChange={handleInterest3}>
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
                profile photo:
                <input type="text" name="profilePic" id="signUpInputs" value={profilePic} onChange={onProfilePicChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                email:
                <input type="text" name="email" id="signUpInputs" value={email} onChange={onEmailChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                password:
                <input type="password" name="password" id="signUpInputs" value={password} onChange={onPasswordChange}/>
                </label>
                <br></br>
                <br></br>
                <input type="submit" value="submit" id="signUpSubmit" onClick={onSignUpSubmit}></input>
            </form>
        </div>
    )

    return (
        <div>
            {ifUser ? null : newUserSignUp }
        </div>
    )

}

export default SignUp