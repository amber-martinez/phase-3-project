import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import ChatBox from "./ChatBox"

function Chat({ people, currentProfile }) {

    const [currentChatPerson, setCurrentChatPerson] = useState('Click on someone to send a message!');
    const [chatContent, setChatContent] = useState();
    const [yourMessages, setYourMessages] = useState([]);
    const [loadMessages, setLoadMessages] = useState([]);
    const [chatterPic, setChatterPic] = useState('https://www.transparenttextures.com/patterns/asfalt-light.png');
    const [greetingData, setGreetingData] = useState('');
    const [greetingLine, setGreetingLine] = useState('');
    const [chatStart, setChatStart] = useState(false);

    useEffect(() => {
        fetch(`https://www.greetingsapi.com/random`)
        .then(r => r.json())
        .then(data => setGreetingData(data))
    }, [currentChatPerson])

    useEffect(() => {

        if (currentProfile != null) {
        const filteredPeople = people.filter(person => person.logged_in !=true )
        const peopleIcons = filteredPeople.map(person => (
            <span id="chatIconGroup" key={person.first_name}>
                <img src={person.profile_photo_link} id="chatIcon"></img>
                <p onClick={handleChatNameClick}>{person.first_name}</p>
            </span>
        ))

        if (currentProfile.messages != null) {
            setYourMessages(currentProfile.messages)
        }

        setChatContent(
            <div>
                <span>
                    {peopleIcons}
                </span>
                <div>
                    <ChatBox currentChatPerson={currentChatPerson} chatterPic={chatterPic} loadMessages={loadMessages} greetingLine={greetingLine} chatStart={chatStart} currentProfile={currentProfile} handleNewMessage={handleNewMessage}/>
                </div>
            </div>
        )

        } else {
            setChatContent(
                <div>
                    <img id="wrongLoginImg" src="https://media1.giphy.com/media/j2Fogdl6QqoxEJcUb3/giphy.gif"></img>
                    <h3>whoa, who are you?</h3>
                    <p>make an account <NavLink to="/signup">here</NavLink>, or try to <NavLink to="/login">log in</NavLink>.</p>
                </div>
            )
        }
    

    }, [currentProfile])

    function handleChatNameClick(e) {
        setChatterPic(e.target.parentElement.firstChild.src);
        setCurrentChatPerson(e.target.innerText);
        setChatStart(true);

        console.log(yourMessages)

        const currentChatMessages = yourMessages.filter(messageInfo => {
            return messageInfo.recipient == e.target.innerText
        })

            const postMessages = currentChatMessages.map(msg => (
                <div id='rightBubblesWrapper' key={msg.id}>
                <div id='rightContainer'>
                    <div id='rightBubble'>
                        <p>{msg.message}</p>
                    </div>
                    <div id='rightPhotoCropper'>
                        <img id="rightIcon" src={currentProfile.profile_photo_link}></img>
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
                    <img id="rightIcon" src={currentProfile.profile_photo_link}></img>
                </div>
            </div>
            </div>
        )

        setLoadMessages(() => [...loadMessages, newMessagePost]);

    }

    const filteredPeople = people.filter(person => person.logged_in !=true )


    const peopleIcons = filteredPeople.map(person => (
        <span id="chatIconGroup" key={person.first_name}>
            <img src={person.profile_photo_link} id="chatIcon"></img>
            <p onClick={handleChatNameClick}>{person.first_name}</p>
        </span>
    ))

    const chat = (
        <div>
            <span>
                {peopleIcons}
            </span>
            <div>
                <ChatBox currentChatPerson={currentChatPerson} chatterPic={chatterPic} loadMessages={loadMessages} greetingLine={greetingLine} chatStart={chatStart} currentProfile={currentProfile} handleNewMessage={handleNewMessage}/>
            </div>
        </div>
    )

    const signInToChat = (
        <div>
            <img id="wrongLoginImg" src="https://media1.giphy.com/media/j2Fogdl6QqoxEJcUb3/giphy.gif"></img>
            <h3>whoa, who are you?</h3>
            <p>make an account <NavLink to="/signup">here</NavLink>, or try to <NavLink to="/login">log in</NavLink>.</p>
        </div>
    )

    return (
        <div>
            {chatContent}
        </div>
    )
}

export default Chat