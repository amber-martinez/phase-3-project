import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function NewProfile({ currentProfile }) {

    const [defaultProfileView, setDefaultProfileView] = useState();
    const [isEditProfileView, setIsEditProfileView] = useState(false);
    const [editedGender, setEditedGender] = useState("");
    const [editedLocation, setEditedLocation] = useState("");
    const [editedInterest1, setEditedInterest1] = useState("");
    const [editedInterest2, setEditedInterest2] = useState("");
    const [editedInterest3, setEditedInterest3] = useState("");

    function onEditProfileClick() {
        setIsEditProfileView(!isEditProfileView)
    }

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
        fetch(`http://localhost:9292/users`)
        .then(r => r.json())

        if (currentProfile != null) {

            if (isEditProfileView == false) {
                setDefaultProfileView(
                    <div>
                        <div className="yourProfileCard">
                            <img src={currentProfile.profile_photo_link} id="personIcon"></img>
                            <div id="profileText">
                                <h1 id="personHeader">{currentProfile.first_name}, {currentProfile.age}</h1>
                                <p id="personLocation">{currentProfile.location}</p>
                                <p id="personInterests">{currentProfile.interest_1}, {currentProfile.interest_2}, {currentProfile.interest_3}</p>
                            <div onClick={onEditProfileClick}>
                                <p id="editProfileButton">edit profile</p>
                            </div>
                            <div onClick={onDeleteProfileClick}>
                                <NavLink to="/login" id="logOutLink">
                                    <p id="editProfileButton">delete profile</p>
                                </NavLink>
                            </div>
                            <div onClick={onLogoutClick}>
                                <NavLink to="/login" id="logOutLink">
                                    <p id="logOutButton">log out</p>
                                </NavLink>
                            </div>
                            </div>
                        </div>
                    </div>
                    )
            } else {
                setDefaultProfileView(
                    <div>
                    <div className="yourProfileCard">
                        <img src={currentProfile.profile_photo_link} id="personIcon"></img>
                        <div id="profileText">
                            <h1 id="personHeader">{currentProfile.first_name}, {currentProfile.age}</h1>
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
                            <input type="text" placeholder="location" id="editInputs" onChange={onLocationEdit}></input>
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
                        <div>
                            <p id="editProfileBackButton" onClick={onEditProfileClick}>back</p>
                            <p id="saveButton" onClick={onEditProfileSave}>save</p>
                        </div> 
                        </div>
                    </div>
                </div>
                )
            }
        } else {
            setDefaultProfileView(
                <div>you're not logged in!</div>
            )
        }
    }, [currentProfile])

    function onEditProfileSave() {
        const editedProfileData = {
            first_name: currentProfile.first_name,
            gender: editedGender,
            age: currentProfile.age,
            location: editedLocation,
            interest_1: editedInterest1,
            interest_2: editedInterest2,
            interest_3: editedInterest3,
            profile_photo_link: currentProfile.profile_photo_link,
            email: currentProfile.email,
            password: currentProfile.password,
            logged_in: currentProfile.logged_in
        }

        fetch(`http://localhost:9292/users/${currentProfile.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProfileData),
        })
        .then(r => r.json())

        setIsEditProfileView(false)
    }


    function onDeleteProfileClick() {
        fetch(`http://localhost:9292/users/${currentProfile.id}`, {
            method: "DELETE",
        })
    }

    function onLogoutClick() {

        fetch(`http://localhost:9292/users/${currentProfile.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: currentProfile.first_name,
                gender: currentProfile.gender,
                age: currentProfile.age,
                location: currentProfile.location,
                interest_1: currentProfile.interest_1,
                interest_2: currentProfile.interest_2,
                interest_3: currentProfile.interest_3,
                profile_photo_link: currentProfile.profile_photo_link,
                email: currentProfile.email,
                password: currentProfile.password,
                logged_in: false
            }),
        })
        .then((r) => r.json())
        .then(data => console.log(data))

        window.location.reload()
    }


    return (
        <div>
            {defaultProfileView}
        </div>
    )
}

export default NewProfile