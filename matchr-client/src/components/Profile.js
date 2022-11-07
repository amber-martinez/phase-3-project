import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


// TO MAKE THIS WORK - NOTE
// NEEDS TO SEARCH THE SERVER FOR A MATCH BETWEEN EMAIL / PASSWORD

function Profile() {

    const [profileData, setProfileData] = useState({});
    const [profileState, setProfileState] = useState(false);
    const [profileMatch, setProfileMatch] = useState({})
    const [loginInput, setLoginInput] = useState({});
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('http://localhost:9292/inputs')
        .then(r => r.json())
        .then(data => {
            const lastInput = data.slice(-1)[0];
            setLoginInput(lastInput)
            setLoad(!load)
        })

        fetch(`http://localhost:9292/users`)
        .then(r => r.json())
        .then(data => setProfileData(data))

        Array.from(profileData).forEach(person => {
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
                    // .then((data) => console.log(data));

            } else {
                // console.log("no match!")
            }
        })
    }, [load])


    const loadProfile = (
        <div className="personCard">
            <img src={profileMatch.profile_photo_link} id="personIcon"></img>
            <div id="profileText">
                <h1 id="personHeader">{profileMatch.first_name}, {profileMatch.age}</h1>
                <p id="personLocation">{profileMatch.location}</p>
                <p id="personInterests">{profileMatch.interest_1}, {profileMatch.interest_2}, {profileMatch.interest_3}</p>
            </div>
        </div>
    )

    return (
        <div>
            {profileState ? loadProfile : null}
        </div>
    )
}

export default Profile