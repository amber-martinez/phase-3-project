import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import { Route, Switch } from "react-router-dom";
import LogIn from "./components/LogIn";
// import ClickMe from "./components/ClickMe";
import SignUp from "./components/SignUp";

function App() {

  const [people, setPeople] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:9292/users`)
    .then((r) => r.json())
    .then(data => setPeople(data))

  }, [])


  return (
    <div className="App">
      <Header />
      <div>
        <NavBar people={people}/>
        {/* <ClickMe /> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/chat">
            <Chat people={people}/>
          </Route>
          <Route exact path="/login">
            <LogIn/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
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
