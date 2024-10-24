import React, { useState } from "react";
export default function ObjectStateVariable() {
    const [person, setPerson] = useState({ name: "Peter", age: 24 });
    return (
        <div>
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <div>
                <input
                    style={{ marginBottom: '5px' }}
                    defaultValue={person.name}
                    onChange={(e) => setPerson({ ...person, name: e.target.value })}
                />
            </div>
            <div>
                <input
                    defaultValue={person.age}
                    onChange={(e) => setPerson({
                        ...person,
                        age: parseInt(e.target.value)
                    })}
                /></div>
            <hr />
        </div>
    );
}
