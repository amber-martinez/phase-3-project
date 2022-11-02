import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import { Route, Switch } from "react-router-dom";
// import ClickMe from "./components/ClickMe";
import PeopleContainer from "./components/PeopleContainer";

function App() {

  const [people, setPeople] = useState([]);
  const [yourProfile, setYourProfile] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/users`)
    .then((r) => r.json())
    .then(data => setPeople(data))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/users`)
    .then(r => r.json())
    .then(data => setYourProfile(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <div>
        <NavBar />
        {/* <ClickMe /> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/chat">
            <Chat people={people}/>
          </Route>
          <Route exact path="/profile">
            <Profile yourProfile={yourProfile}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
