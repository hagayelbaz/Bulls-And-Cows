import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './GameInput.css'
import Button from "../Button/Button";
import MessageBox from "../MessageBox/MessageBox";

/**
 * the game basic input with 4 button to select number.
 * @param onSubmit func type, values passed to this func
 * @param onResClick the '?' button clicked
 * @param className class names...
 * @returns {JSX.Element}
 * @constructor
 */
function GameInput({onSubmit, onResClick, className}) {
    const classNames = `d-flex justify-content-center ${className}`;
    const [values, setValue] = useState([0, 0, 0, 0]);
    const [error, setError] = useState("");


    const submit = () => {
        if (new Set(values).size === values.length) {
            onSubmit(values);
            setError("");
        } else
            setError("duplicates not allowed")
    }
    const updateValuesAtIndex = (index, val) => {
        const cpy = [...values];
        cpy[index] = val;
        setValue(cpy);
    }
    const handleIncrement = (index) => {
        if (values[index] >= 9)
            updateValuesAtIndex(index, 0);
        else
            updateValuesAtIndex(index, values[index] + 1);
    };
    const handleKeyEntered = (index, e) => {
        if (!isNaN(parseInt(e.key))) {
            updateValuesAtIndex(index, parseInt(e.key));
        }
    };


    return (
        <div className={classNames}>
            <div className="mx-auto">
                <table className="table border-0">
                    <tbody>
                    <tr className="customGameInput">
                        {values.map((val, i) => (
                            <td key={i}>
                                <Button text={val} onclick={() => handleIncrement(i)}
                                        onKeyEntered={(e) => handleKeyEntered(i, e)}/>
                            </td>
                        ))}
                    </tr>
                    </tbody>
                </table>

                <div className="text-center">

                    <MessageBox text={error} type="error"/>

                    <div className="row">
                        <Button text="Go" onclick={submit} containerClassName="col"/>
                        <Button text="?" onclick={onResClick} containerClassName="col"/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default GameInput;
