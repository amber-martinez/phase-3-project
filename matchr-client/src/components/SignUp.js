import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SignUp() {
    const [first_name, setFirst_Name] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [profile_photo_link, setProfilePic] = useState("");
    const [interest_1, setInterest_1] = useState("");
    const [interest_2, setInterest_2] = useState("");
    const [interest_3, setInterest_3] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logged_in, setLogged_in] = useState(false);

    function onFirstNameChange(e) {
        setFirst_Name(e.target.value)
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

    function handleinterest_1(e) {
        setInterest_1(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function handleinterest_2(e) {
        setInterest_2(e.target.value)
        e.target.style.color = '#1c1c59';
    }

    function handleinterest_3(e) {
        setInterest_3(e.target.value)
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
        setLogged_in(true)

        const profileData = {
            first_name: first_name,
            gender: gender,
            age: age,
            location: location,
            interest_1: interest_1,
            interest_2: interest_2,
            interest_3: interest_3,
            profile_photo_link: profile_photo_link,
            email: email,
            password: password,
            logged_in: logged_in
        };

        console.log(profileData)

        fetch(`http://localhost:9292/users`, {
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
                <input type="text" name="name" id="signUpInputs" value={first_name} placeholder="first name" onChange={onFirstNameChange}/>
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
                    <select required name={interest_1} id="signUpInputs" value={interest_1} onChange={handleinterest_1}>
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
                    <select required name="name" id="signUpInputs" value={interest_2} onChange={handleinterest_2}>
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
                    <select required name="name" id="signUpInputs" value={interest_3} onChange={handleinterest_3}>
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
                <input type="text" name="profilePic" id="signUpInputs" value={profile_photo_link} placeholder="profile photo link" onChange={onProfilePicChange}/>
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
                <div onClick={onSignUpSubmit}>
                    <NavLink to="/login" id="navLinks">
                        <p id="signUpSubmit">submit</p>
                    {/* <input type="submit" value="submit" id="signUpSubmit" onClick={onSignUpSubmit}></input> */}
                </NavLink>
                </div>
            </form>
        </div>
    )

        // {newUserSignUp} is the chunk of code for the signup page

    return (
        <div>
            {/* {logged_in ? null : newUserSignUp } */}
            {newUserSignUp}
        </div>
    )

}

export default SignUp