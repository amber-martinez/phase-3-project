import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Person from "./Person";


function PeopleContainer({ people }) {

    const [locationFilterState, setLocationFilterX] = useState(false);
    const [interestsFilterState, setInterestsFilterX] = useState(false);
    const [ageFilterState, setAgeFilterX] = useState(false);
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [filterState, setFilterState] = useState("All")
    const [peopleGroup, setPeopleGroup] = useState([]);
    const [yourProfileData, setYourProfileData] = useState([])

    let locationFilterX = locationFilterState ? "🔽" : "▶️";
    let interestsFilterX = interestsFilterState ? "🔽" : "▶️";
    let ageFilterX = ageFilterState ? "🔽" : "▶️";

    useEffect(() => {
        if (filterState === "All") {
            setFilteredPeople(people)
        }
    })

    useEffect(() => {
        fetch(`http://localhost:9292/users`)
        .then(r => r.json())
        .then(data => {
            const profile = data.filter(person => person.logged_in == true)
            setYourProfileData(profile[0])
        })
    }, [])

    function handleLocationFilter(e) {
        e.preventDefault();

        setLocationFilterX(!locationFilterState)
    }

    function handleInterestsFilter(e) {
        e.preventDefault();

        setInterestsFilterX(!interestsFilterState)
    }

    function handleAgeFilter(e) {
        e.preventDefault();

        setAgeFilterX(!ageFilterState)
    }

// filter options buttons
    let interests = (
        <strong>
            <button id="interestButton" onClick={handleIntClick}>all</button>
            <button id="interestButton" onClick={handleIntClick}>baking</button>
            <button id="interestButton" onClick={handleIntClick}>biking</button>
            <button id="interestButton" onClick={handleIntClick}>concerts</button><br></br>
            <button id="interestButton" onClick={handleIntClick}>cooking</button>
            <button id="interestButton" onClick={handleIntClick}>drinking</button>
            <button id="interestButton" onClick={handleIntClick}>gaming</button><br></br>
            <button id="interestButton" onClick={handleIntClick}>gardening</button>
            <button id="interestButton" onClick={handleIntClick}>hiking</button>
            <button id="interestButton" onClick={handleIntClick}>pilates</button>
            <button id="interestButton" onClick={handleIntClick}>pottery</button>
        </strong>
    )
    let listOfInterests = interestsFilterState ? interests : "";

    let locations = (
        <strong>
            <button id="interestButton" onClick={handleLocClick}>all</button>
            <button id="interestButton" onClick={handleLocClick}>Marina-District</button>
            <button id="interestButton" onClick={handleLocClick}>Mission-District</button>
            <button id="interestButton" onClick={handleLocClick}>Nopa</button><br></br>
            <button id="interestButton" onClick={handleLocClick}>North Beach</button>
            <button id="interestButton" onClick={handleLocClick}>Pacific Heights</button>
            <button id="interestButton" onClick={handleLocClick}>Richmond-District</button><br></br>
            <button id="interestButton" onClick={handleLocClick}>Russian Hill</button>
            <button id="interestButton" onClick={handleLocClick}>Sunset-District</button>
        </strong>
    )
    let listOfLocations = locationFilterState ? locations : "";

    let ages = (
        <strong>
            <button id="interestButton" onClick={handleAgeClick}>all</button>
            <button id="interestButton" onClick={handleAgeClick}>20-25</button>
            <button id="interestButton" onClick={handleAgeClick}>26-30</button>
            <button id="interestButton" onClick={handleAgeClick}>31-35</button><br></br>
        </strong>
    )
    let listOfAges = ageFilterState ? ages : "";

// filter functions
    function handleLocClick(e) {
        const peopleLocFilter = people.filter(person => {
            if (e.target.innerText === "all") {
                return person
            } else if (person.location === e.target.innerText) {
                return person
            }
        })
        setFilterState("Location");
        setFilteredPeople(peopleLocFilter);
    }

    function handleIntClick(e) {
        const peopleIntFilter = people.filter(person => {
            if (e.target.innerText === "all") {
                return person
            } else if (person.interest_1 === e.target.innerText) {
                return person
            } else if (person.interest_2 === e.target.innerText) {
                return person
            } else if (person.interest_3 === e.target.innerText) {
                return person
            }
        })
        setFilterState("Interests");
        setFilteredPeople(peopleIntFilter);
    }

    function handleAgeClick(e) {
        const peopleAgeFilter = people.filter(person => {
            console.log(person)
            if (e.target.innerText === "all") {
                return person
            } else if (e.target.innerText === "20-25") {
                if (person.age <= 25) {
                    return person
                }
            } else if (e.target.innerText === "26-30") {
                if (person.age <= 30 && person.age >= 26) {
                    return person
                }
            } else if (e.target.innerText === "31-35") {
                if (person.age >= 31 && person.age >=31 ) {
                    return person
                }
            }
        })
        setFilterState("Age");
        setFilteredPeople(peopleAgeFilter);
    }

    useEffect(() => {

        setPeopleGroup(filteredPeople.filter(person => person.logged_in != true).map(person => (
            <Person
            key={person.id}
            id={person.id}
            name={person.first_name}
            gender={person.gender}
            age={person.age}
            location={person.location}
            image={person.profile_photo_link}
            interest1={person.interest_1}
            interest2={person.interest_2}
            interest3={person.interest_3}
            />
        )))

    }, [filteredPeople])

    const peopleContainer = (
        <span id="peopleContainer">
        <span id="filterGroup">
            <span>
                <p id="filterItem"><button id="filterBtn" onClick={handleLocationFilter}>{locationFilterX}</button>location<br></br>
                {listOfLocations}
                </p>
            </span>
            <span>
                <p id="interestsFilterItem"><button id="filterBtn" onClick={handleInterestsFilter}>{interestsFilterX}</button>interests<br></br>
                {listOfInterests}
                </p>
            </span>
            <span>
                <p id="filterItem"><button id="filterBtn" onClick={handleAgeFilter}>{ageFilterX}</button>age<br></br>
                {listOfAges}
                </p>
            </span>
        </span>
        <span id="peopleCards">
            {peopleGroup}
        </span>
        </span>
    )

    const signInForPeople = (
        <div>
            <img id="wrongLoginImg" src="https://media4.giphy.com/media/BHnkkJ67uggC8j3Aek/giphy.gif"></img>
            <h3>whoa, who are you?</h3>
            <p>make an account <NavLink to="/signup">here</NavLink>, or try to <NavLink to="/login">log in</NavLink>.</p>
        </div>
    )

    return (
        <div>
            {yourProfileData ? peopleContainer : signInForPeople}
        </div>
    )
}

export default PeopleContainer