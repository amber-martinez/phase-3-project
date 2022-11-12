import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import PeopleContainer from "./PeopleContainer";

function Home({ people, currentProfile }) {

  const [homepageContent, setHomepageContent] = useState();

  useEffect(() => {
    if (currentProfile != null) {
      setHomepageContent(<PeopleContainer people={people}/>) 
    } else {
      setHomepageContent(
        <div>
            <img id="wrongLoginImg" src="https://media1.giphy.com/media/W0EYIXw4wkbF0SU0wS/giphy.gif"></img>
            <h3>you're clearly here to meet sexy singles, so..</h3>
            <p>make an account <NavLink to="/signup">here</NavLink>, or try to <NavLink to="/login">log in</NavLink>.</p>
        </div>
      ) 
    }
  }, [currentProfile])
    
    return (
      <div>
        <div>
          {homepageContent}
        </div>
      </div>
    )
}

export default Home