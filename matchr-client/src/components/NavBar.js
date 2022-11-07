import React, { useState, useEffect } from "react";
// import Home from "./Home";
// import Chat from "./Chat";
// import Profile from "./Profile";
import { NavLink } from "react-router-dom";

function NavBar({ people }) {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const searchForLogin = people.filter(person => person.logged_in == true);
  
        if (searchForLogin.length > 0) {
          console.log(searchForLogin)
          setLoggedIn(true)
        }
  
    }, [])

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