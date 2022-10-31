import React, { useState } from 'react'

function ClickMe() {

    const [clickMeInput, setClickMeInput] = useState('');
    const [clickMeNumber, setClickMeNumber] = useState(0);

    function handleClickMeInput(e) {
        setClickMeInput(e.target.value)
    }

    function handleClickMeBtn(e) {
        e.preventDefault()
        console.log(clickMeInput.length)

        setClickMeNumber(clickMeNumber + clickMeInput.split('').length)
        setClickMeInput('')

    }

    return (
        <div>
            <form>
                <input onChange={handleClickMeInput} value={clickMeInput}></input>
                <button onClick={handleClickMeBtn}>Click Me</button>
            </form>
            <p>{clickMeNumber}</p>
        </div>
    )
}

export default ClickMe