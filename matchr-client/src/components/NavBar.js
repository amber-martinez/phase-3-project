import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ currentProfile }) {

    const [personNav, setPersonNav] = useState();

    useEffect(() => {
        if (currentProfile != null) {
            setPersonNav(
                <NavLink to="/profile">
                    <img src="https://i.imgur.com/xgw6bM2.png" id="navIcon"></img>
                </NavLink>
            )
        } else {
            setPersonNav(
                <NavLink to="/login">
                    <img src="https://i.imgur.com/xgw6bM2.png" id="navIcon"></img>
                </NavLink>
            )
        }
    }, [currentProfile])


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
                {personNav}
            </span>
        </div>
    )
}

export default NavBar;