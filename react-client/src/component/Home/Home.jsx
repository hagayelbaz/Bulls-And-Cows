import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './Home.css'
import Button from "../Button/Button";
import {useState} from "react";
import Rules from "./Rules/Rules";
import ScoreTable from "./ScoreTable/ScoreTable";


/**
 * home page handle between rules and score pages
 * @param onPlay what's happened when user enter play
 * @returns {JSX.Element}
 * @constructor
 */
function Home({onPlay}) {
    const [footer, setFooter] = useState(undefined);
    //the only reason for that is to re-render the page every click on the table score,
    //even if the state is already table score, that's important if during this time
    //there is more data
    const [scoreTableKey, setScoreTableKey] = useState(0);

    const onSubmit = (e) =>{
        e.preventDefault();
        const userName = e.target.elements.customInput.value;
        onPlay(userName);
    }

    return (
        <div className="text-center mt-5">
            <div className="m-4">
                <form onSubmit={onSubmit}>
                    <div className="input-group mb-3 row-cols-md-1">
                        <input type="text" className="form-control rounded-3" placeholder="Your Name:" id="customInput"
                               pattern="[A-Za-z0-9]{1,20}" required/>

                        <div className="row mt-4">
                            <div className="col">
                                <Button type="submit" text="Play" className="w-100"/>
                            </div>
                            <div className="col">
                                <Button text="Rules" type="button" onclick={() => setFooter(<Rules/>)}/>
                            </div>
                            <div className="col">
                                <Button text="Score Table" type="button" onclick={() => {
                                    setScoreTableKey(scoreTableKey + 1);
                                    setFooter(<ScoreTable key={scoreTableKey}/>);
                                }}/>
                            </div>
                        </div>
                    </div>
                </form>

                {footer}

            </div>
        </div>
    );
}


export default Home;

