import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import { Route, Switch } from "react-router-dom";
import LogIn from "./components/LogIn";
// import ClickMe from "./components/ClickMe";
import PeopleContainer from "./components/PeopleContainer";
import SignUp from "./components/SignUp";
import NewProfile from "./components/NewProfile";

function App() {

  const [people, setPeople] = useState([]);
  const [currentProfile, setCurrentProfile] = useState()
  const [yourProfileData, setYourProfileData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9292/users`)
    .then((r) => r.json())
    .then(data => {
      setPeople(data)

      const profileMatch = data.filter(person => {
        return person.logged_in == true
      })[0]
      setCurrentProfile(profileMatch)
    })

  }, )


  return (
    <div className="App">
      <Header />
      <div>
        <NavBar currentProfile={currentProfile}/>
        <Switch>
          <Route exact path="/">
            <Home people={people} currentProfile={currentProfile}/>
          </Route>
          <Route exact path="/chat">
            <Chat people={people} currentProfile={currentProfile}/>
          </Route>
          <Route exact path="/login">
            <LogIn/>
            {/* <Profile yourProfile={yourProfile}/> */}
          </Route>
          <Route exact path="/profile">
            <NewProfile currentProfile={currentProfile}/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
