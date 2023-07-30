import React, {useState} from 'react';
import Home from "../Home/Home";
import GameBoard from "../GameBoard/GameBoard";
import GameHeader from "../GameHeader/GameHeader";
import MessageBox from "../MessageBox/MessageBox";


/**
 * main Controller
 * @returns {JSX.Element}
 * @constructor
 */
function Controller() {
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const onPlayClicked = (userName) => {
        setPage(<GameBoard onWon={(guess) => onWon(userName, guess)}/>);
    };

    const onWon = async (userName, guess) => {
        fetch('/api/highscores', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userName: userName,
                guess: guess
            }),
        }).catch(e => setError(e.message));

        setPage(<Home onPlay={onPlayClicked}/>);
        setMessage("You Won!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        setTimeout(() => setMessage(""), 5000);
    };

    const [page, setPage] = useState(<Home onPlay={onPlayClicked}/>);


    return (
        <>
            <GameHeader text="Bulls & Cows"/>
            <MessageBox text={error} type="error"/>
            {page}
            <MessageBox text={message} type="info"/>
        </>
    );
}

export default Controller;