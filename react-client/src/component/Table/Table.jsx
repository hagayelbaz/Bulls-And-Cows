import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './Table.css'

/**
 * simple table to present matrix data
 * @param headers header list
 * @param data the actual data, matrix
 * @param limit *optional, if u want to limit the data on table
 * @returns {JSX.Element}
 * @constructor
 */
function Table({headers, data, limit}) {
    if(limit)
        data = data?.slice(0, limit);

    return (
        <div className="justify-content-center ms-5 me-5 mt-3">
            <div className="mx-auto ">
                <table className="table rounded-3 customTable">
                    <thead>
                    <tr>
                        {headers?.map((header, i) => {
                            return <th key={i}>{header}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((row, r) => {
                        return (
                            <tr key={r}>
                                {row?.map((col, c) => {
                                    return <td key={c}>{col}</td>
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;