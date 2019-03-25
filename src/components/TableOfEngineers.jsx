import React from 'react';

const TableOfEngineers = (props) => {
    let tableHeaders = (<thead className="Table-head">
        <tr>
            {props.tableColumns.map((column) => <th className="Table-column">{column}</th>)}
        </tr>
    </thead>)
    return (
        < div >
            <div>
                <hr />

            </div>
            <div>
                <table className="Table">
                    {tableHeaders}
                    {props.allEngineers.map((engineer, index) => {
                        return <tr key={index}>
                            <td className="Table-column">{engineer.name}</td>
                            <td className="Table-column">${engineer.rate}/hr.</td>
                            <td className="Table-column">{engineer.hours}</td>
                        </tr>
                    })}
                </table>
            </div>
        </div>
    )
}


export default TableOfEngineers


