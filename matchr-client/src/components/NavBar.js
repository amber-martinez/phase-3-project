import React, { useState, useEffect } from "react";
// import Home from "./Home";
// import Chat from "./Chat";
// import Profile from "./Profile";
import { NavLink } from "react-router-dom";

function NavBar() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [searchForLogin, setSearchForLogin] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        
        fetch(`http://localhost:9292/users`)
        .then(r => r.json())
        .then(data => {
            setSearchForLogin(data.filter(person => {
                if (person.logged_in == true) {
                    return person
                }
            }));
        })
    }, [searchForLogin])


    useEffect(() => {

        if (searchForLogin.length > 0) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }

    }, [searchForLogin])


    const profilePage = (
        <NavLink to="/profile">
            <img src="https://i.imgur.com/xgw6bM2.png" id="navIcon"></img>
        </NavLink>
    )

    const loginPage = (
        <NavLink to="/login">
            <img src="https://i.imgur.com/xgw6bM2.png" id="navIcon"></img>
        </NavLink>
    )


    return (
        <div className="NavBar">
            <span id="navSpan">
                <NavLink to="/chat">
                    <img src="https://i.imgur.com/Q8KNgQa.png" id="navIcon"></img>
                </NavLink>
            </span>
            <span id="navSpan">
                <NavLink to="/">
                    <img src="https://i.imgur.com/sKMfQ0g.png" id="navIcon"></img>
                </NavLink>
            </span>
            <span id="navSpan">
                {loggedIn ? profilePage : loginPage }
            </span>
        </div>
    )
}

export default NavBar;