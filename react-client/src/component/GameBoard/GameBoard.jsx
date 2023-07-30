import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './GameBoard.css'
import {useState} from "react";
import GameInput from "../GameInput/GameInput";
import Table from "../Table/Table";
import Game from "./Game";


/**
 * the main game board
 * @param onWon what's happened when user won
 * @returns {JSX.Element}
 * @constructor
 */
function GameBoard({onWon}) {
    const headers = ["Selection", "Bulls", "Cows"];
    const [lines, setLines] = useState([]);
    const [generate] = useState(Game.createRandom(4));
    const [userTry, setUserTry] = useState(0);


    const onSubmit = (d) => {
        let cpy = [...lines];
        cpy.push(Game.play(generate, d));
        setLines(cpy);

        if (JSON.stringify(d) === JSON.stringify(generate))
            onWon(userTry + 1);

        setUserTry(userTry + 1);
    };

    return (
        <>
            <GameInput onSubmit={onSubmit} onResClick={() => alert(generate)}/>

            <div className="tableStyle">
                <Table headers={headers} data={[...lines].reverse()}/>
            </div>
        </>

    );
}

export default GameBoard;