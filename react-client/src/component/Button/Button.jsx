import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './Button.css'


/**
 * simple react Button with game font
 * @param text the text on button
 * @param onclick function when button clicked
 * @param onKeyEntered when key from keyboard clicked
 * @param className the button className
 * @param type type of the button (submit / button)
 * @param containerClassName the div contain the button
 * @returns {JSX.Element}
 * @constructor
 */
function Button({text, onclick, onKeyEntered, className, type, containerClassName, key}){
    const classes = `customButton rounded-3 display-6 mt-1 p-1 pe-3 ps-3 ${className}`;
    const containerClass = `text-center ${containerClassName}`;

    return (
        <div className={containerClass}>
            <button key={key} type={type} onKeyDown={onKeyEntered} onClick={onclick} className={classes}>{text}</button>
        </div>
    );
}

export default Button;