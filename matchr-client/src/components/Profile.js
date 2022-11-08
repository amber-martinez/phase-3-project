import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


// TO MAKE THIS WORK - NOTE
// NEEDS TO SEARCH THE SERVER FOR A MATCH BETWEEN EMAIL / PASSWORD

function Profile({ profileData }) {

    const [loadedProfileData, setLoadedProfileData] = useState({});
    const [profileState, setProfileState] = useState(false);
    const [profileMatch, setProfileMatch] = useState({})
    const [loginInput, setLoginInput] = useState({});
    const [load, setLoad] = useState(false);
    const [editProfileClick, setEditProfileClick] = useState(false);
    const [editedGender, setEditedGender] = useState("");
    const [editedLocation, setEditedLocation] = useState("");
    const [editedInterest1, setEditedInterest1] = useState("");
    const [editedInterest2, setEditedInterest2] = useState("");
    const [editedInterest3, setEditedInterest3] = useState("");

    
    function onGenderEdit(e) {
        setEditedGender(e.target.value)
    }

    function onLocationEdit(e) {
        setEditedLocation(e.target.value)
    }

    function onInterest1Edit(e) {
        setEditedInterest1(e.target.value)
    }

    function onInterest2Edit(e) {
        setEditedInterest2(e.target.value)
    }

    function onInterest3Edit(e) {
        setEditedInterest3(e.target.value)
    }



    useEffect(() => {
        fetch('http://localhost:9292/inputs')
        .then(r => r.json())
        .then(data => {
            const lastInput = data.slice(-1)[0];
            setLoginInput(lastInput)
            setLoad(!load)
        })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:9292/users`)
        .then(r => r.json())
        // .then(data => console.log(data))

        Array.from(profileData).forEach(person => {
            // console.log(person)
            if (person.email == loginInput.email && person.password == loginInput.password ) {
                // console.log(person.id, "YES match!")
                setProfileState(true)
                setProfileMatch(person)

                fetch(`http://localhost:9292/users/${person.id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        first_name: person.first_name,
                        gender: person.gender,
                        age: person.age,
                        location: person.location,
                        interest_1: person.interest_1,
                        interest_2: person.interest_2,
                        interest_3: person.interest_3,
                        profile_photo_link: person.profile_photo_link,
                        email: person.email,
                        password: person.password,
                        logged_in: true
                    }),
                  })
                    .then((r) => r.json())
                    .then(data => setLoadedProfileData(data))

            }
        })
    }, [loginInput])

    console.log(profileState)


    function onLogoutClick() {
        setProfileState(false)

        fetch(`http://localhost:9292/users/${profileMatch.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: profileMatch.first_name,
                gender: profileMatch.gender,
                age: profileMatch.age,
                location: profileMatch.location,
                interest_1: profileMatch.interest_1,
                interest_2: profileMatch.interest_2,
                interest_3: profileMatch.interest_3,
                profile_photo_link: profileMatch.profile_photo_link,
                email: profileMatch.email,
                password: profileMatch.password,
                logged_in: false
            }),
        })
        .then((r) => r.json())
        .then(data => console.log(data))


        fetch(`http://localhost:9292/inputs`, {
            method: "DELETE"
        })
    }

    const editedProfileData = {
        first_name: profileMatch.first_name,
        gender: editedGender,
        age: profileMatch.age,
        location: editedLocation,
        interest_1: editedInterest1,
        interest_2: editedInterest2,
        interest_3: editedInterest3,
        profile_photo_link: profileMatch.profile_photo_link,
        email: profileMatch.email,
        password: profileMatch.password,
        logged_in: profileMatch.logged_in
    }

    function onEditProfileClick() {
        setEditProfileClick(!editProfileClick)
    }

    function onClickBackButton() {
        setEditProfileClick(false)
    }

    function onEditProfileSave() {
        fetch(`http://localhost:9292/users/${profileMatch.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: profileMatch.first_name,
                gender: editedProfileData.gender,
                age: profileMatch.age,
                location: editedProfileData.location,
                interest_1: editedProfileData.interest_1,
                interest_2: editedProfileData.interest_2,
                interest_3: editedProfileData.interest_3,
                profile_photo_link: profileMatch.profile_photo_link,
                email: profileMatch.email,
                password: profileMatch.password,
                logged_in: profileMatch.logged_in
            }),
        })
        .then(r => r.json())
        .then(data => setLoadedProfileData(data))

        setEditProfileClick(false)
    }


    const loadProfile = (
        <div>
            <div className="yourProfileCard">
                <img src={loadedProfileData.profile_photo_link} id="personIcon"></img>
                <div id="profileText">

                    <h1 id="personHeader">{loadedProfileData.first_name}, {loadedProfileData.age}</h1>

                    
                    {editProfileClick ? 
                        <div>
                        <select required id="editInputsGender" onChange={onGenderEdit}>
                            <option value="" disabled selected>gender</option>
                            <option className="signUpOption">female</option>
                            <option className="signUpOption">male</option>
                            <option className="signUpOption">transgender</option>
                            <option className="signUpOption">non-binary</option>
                            <option className="signUpOption">prefer not to answer</option>
                        </select>
                        </div>
                    : null}

                    {editProfileClick ? <input type="text" placeholder="location" id="editInputs" onChange={onLocationEdit}></input>
                    :<p id="personLocation">{loadedProfileData.location}</p>}

                    {editProfileClick ? 
                    <div>
                        <select required id="editInputs" value={editedInterest1} onChange={onInterest1Edit}>
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
                        <br></br>
                        <select required id="editInputs" value={editedInterest2} onChange={onInterest2Edit}>
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
                        <br></br>
                        <select required id="editInputs" value={editedInterest3} onChange={onInterest3Edit}>
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
                        <br></br>
                    </div>
                    : <p id="personInterests">{loadedProfileData.interest_1}, {loadedProfileData.interest_2}, {loadedProfileData.interest_3}</p>}

                    {editProfileClick ? <div><p id="editProfileBackButton" onClick={onClickBackButton}>back</p> <p id="saveButton" onClick={onEditProfileSave}>save</p></div> 
                    : <div onClick={onEditProfileClick}><p id="editProfileButton">edit profile</p></div>}
                    {editProfileClick ? null
                    : <div onClick={onLogoutClick}>
                        <NavLink to="/login">
                            <p id="logOutButton">log out</p>
                        </NavLink>
                    </div>
                    }
                </div>
            </div>
        </div>
    )

    // bird gif credit: https://giphy.com/gifs/upset-blue-jay-cute-mad-BHnkkJ67uggC8j3Aek

    const noSignIn = (
        <div>
            {/* <img src="https://i.pinimg.com/originals/e3/ba/ee/e3baee3636fb619e925f043be080f2c7.gif"></img> */}
            <img id="wrongLoginImg" src="https://media4.giphy.com/media/BHnkkJ67uggC8j3Aek/giphy.gif"></img>
            <h3>whoops! we don't recognize you!</h3>
            <p>make an account <NavLink to="/signup">here</NavLink>, or try to <NavLink to="/login">log in</NavLink>.</p>
        </div>
    )

    return (
        <div>
            {profileState ? loadProfile : noSignIn}
        </div>
    )
}

export default Profile