import React, { useEffect, useState } from "react";
import PeopleContainer from "./PeopleContainer";

function Home() {

  const [people, setPeople] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:9292/users`)
    .then((r) => r.json())
    .then(data => setPeople(data))
  }, [])
    
    return (
      <div>
        <div>
          <PeopleContainer people={people}/>
        </div>
      </div>
    )
}

export default Home