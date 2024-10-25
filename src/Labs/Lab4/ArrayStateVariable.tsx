import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables" className="container">
            <h2>Array State Variable</h2>
            <button
                onClick={addElement}
                type="button"
                className="btn btn-success mb-1">
                Add Element
            </button>
            <div className="list-group">
                {array.map((item, index) => (
                    <div key={index} className="card mb-1">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <span className="fs-4">{item}</span>
                            <button
                                onClick={() => deleteElement(index)}
                                id="wd-delete-element-click"
                                type="button"
                                className="btn btn-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}
