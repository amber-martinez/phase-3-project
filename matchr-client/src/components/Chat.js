import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import ChatBox from "./ChatBox"

function Chat({ people }) {

    const [currentChatPerson, setCurrentChatPerson] = useState('Click on someone to send a message!');
    const [yourMessages, setYourMessages] = useState([]);
    const [loadMessages, setLoadMessages] = useState([]);
    const [chatterPic, setChatterPic] = useState('https://www.transparenttextures.com/patterns/asfalt-light.png');
    const [yourProfileData, setYourProfileData] = useState([]);
    const [greetingData, setGreetingData] = useState('');
    const [greetingLine, setGreetingLine] = useState('');
    const [chatStart, setChatStart] = useState(false);

    useEffect(() => {
        fetch(`https://www.greetingsapi.com/random`)
        .then(r => r.json())
        .then(data => setGreetingData(data))
    }, [currentChatPerson])

    useEffect(() => {
        fetch(`http://localhost:9292/users`)
        .then(r => r.json())
        .then(data => {
            const profile = data.filter(person => person.logged_in == true)
            setYourProfileData(profile[0])
        })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:9292/messages`)
        .then(r => r.json())
        .then(data => {
            console.log(data.find)


            const updatedMessages = data.filter(message => {
                // console.log(message)
                // console.log(yourProfileData.id)
                if (message.user_id == yourProfileData.id) {
                    return message
                }
            })
            // console.log(updatedMessages)
            setYourMessages(updatedMessages)
        })

    }, [loadMessages, yourProfileData])

    function handleChatIconClick(e) {
        console.log(e.target)
    }

    function handleChatNameClick(e) {
        setChatterPic(e.target.parentElement.firstChild.src);
        setCurrentChatPerson(e.target.innerText);
        setChatStart(true);

        const filteredMsgs = yourMessages.filter(msg => {
            if (msg.recipient === e.target.innerText) {
                return msg
            }
        })

        const postMessages = filteredMsgs.map(msg => (
            <div id='rightBubblesWrapper' key={msg.id}>
            <div id='rightContainer'>
                <div id='rightBubble'>
                    <p>{msg.message}</p>
                </div>
                <div id='rightPhotoCropper'>
                    <img id="rightIcon" src={yourProfileData.profile_photo_link}></img>
                </div>
            </div>
            </div>
        ))
        setLoadMessages(postMessages);

        setGreetingLine(`${greetingData.greeting}! That's how you say "hello" in ${greetingData.language} 🙂 How are you?`);

    }

    function handleNewMessage(newMessage) {

        const newMessagePost = (
            <div id='rightBubblesWrapper' key={newMessage.id}>
            <div id='rightContainer'>
                <div id='rightBubble'>
                    <p>{newMessage.message}</p>
                </div>
                <div id='rightPhotoCropper'>
                    <img id="rightIcon" src={yourProfileData.profile_photo_link}></img>
                </div>
            </div>
            </div>
        )

        setLoadMessages(() => [...loadMessages, newMessagePost]);

    }

    const filteredPeople = people.filter(person => person.logged_in !=true )


    const peopleIcons = filteredPeople.map(person => (
        <span id="chatIconGroup" key={person.first_name}>
            <img src={person.profile_photo_link} id="chatIcon" onClick={handleChatIconClick}></img>
            <p onClick={handleChatNameClick}>{person.first_name}</p>
        </span>
    ))

    const chat = (
        <div>
            <span>
                {peopleIcons}
            </span>
            <div>
                <ChatBox currentChatPerson={currentChatPerson} chatterPic={chatterPic} loadMessages={loadMessages} greetingLine={greetingLine} chatStart={chatStart} yourProfileData={yourProfileData} handleNewMessage={handleNewMessage}/>
            </div>
        </div>
    )

    const signInToChat = (
        <div>
            <img id="wrongLoginImg" src="https://media4.giphy.com/media/BHnkkJ67uggC8j3Aek/giphy.gif"></img>
            <h3>whoa, who are you?</h3>
            <p>make an account <NavLink to="/signup">here</NavLink>, or try to <NavLink to="/login">log in</NavLink>.</p>
        </div>
    )

    return (
        <div>
            { yourProfileData ? chat : signInToChat }
        </div>
    )
}

export default Chat