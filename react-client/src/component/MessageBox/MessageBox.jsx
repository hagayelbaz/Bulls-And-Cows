import React from 'react';

/**
 * simple error message component
 * @param text the text error (not shown if it's empty)
 * @param type can be "info" or "error"
 * @returns {JSX.Element}
 * @constructor
 */
function MessageBox({text, type}) {
    const messageType = type === "error" ? "alert-danger" : "alert-info";
    const classes = `${messageType} alert`;

    return (
            <>
                {text !== "" ? (
                    <p className={classes}>{text}</p>
                ) : null}
            </>
    );
}

export default MessageBox;