import React from 'react';

import './Rules.css'


/**
 * simple rules div
 * @returns {JSX.Element}
 * @constructor
 */
function Rules() {
    return (
        <div className="rounded-3 text-light lighter">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Ysabeau:wght@700&display=swap');
            </style>
            <ul className="customFont">
                <li >The game generates a 4-digit random number at the beginning of each round.</li>
                <li>The objective of the game is to guess the randomly generated number correctly.</li>
                <li>The player has to guess a 4-digit number, where each digit is unique (i.e., no repetition of digits).</li>
                <li>After each guess, the game provides feedback on how close the guess was to the actual number. The feedback consists of two numbers: the number of "Bulls" and the number of "Cows."</li>
                <li>A "Bull" means that one of the digits in the guess is in the correct position as the actual number.</li>
                <li>A "Cow" means that one of the digits in the guess is in the actual number, but in the wrong position.</li>
                <li>For example, if the actual number is 1234 and the player guesses 1432, the feedback would be "2 Bulls, 2 Cows" because the player guessed two digits correctly in their correct positions (1 and 3), and two digits correctly but in the wrong position (2 and 4).</li>
                <li>The player has ten attempts to guess the correct number. If the player cannot guess the correct number within ten attempts, the game is over and they lose.</li>
                <li>If the player guesses the correct number within ten attempts, the game is won and they can start a new round.</li>
                <li>Good luck and have fun!</li>
            </ul>
        </div>
    );
}

export default Rules;