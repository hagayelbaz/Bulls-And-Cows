import React, {useEffect, useState} from 'react';

import './ScoreTable.css'
import Table from "../../Table/Table";
import MessageBox from "../../MessageBox/MessageBox";

/**
 * simple score table...
 * @returns {JSX.Element}
 * @constructor
 */
function ScoreTable() {
    const [dataTable, setDataTable] = useState(null);
    const [infoMessage, setInfoMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const headers = ["User Name", "Score"];

    const asTable = () => {
        return dataTable?.map((element) => [element.name, element.guess])?.sort((a, b) => a[1] - b[1]);
    }

    useEffect(() => {
        setInfoMessage("Loading....");

        fetch("/api/highscores")
            .then(res => res.json())
            .then(dt => setDataTable(dt))
            .catch(err => setErrorMessage(err.message))
            .finally(() => setInfoMessage(""));
    }, []);


    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
                <MessageBox type="info" text={infoMessage}/>
                <MessageBox type="error" text={errorMessage}/>
            </div>
            {errorMessage ? (<></>) : (
                <Table headers={headers} data={asTable()} limit={5}/>
            )}

        </>
    );
}

export default ScoreTable;