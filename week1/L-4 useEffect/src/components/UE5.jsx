import React, { useEffect, useState } from 'react'

const UE5 = () => {
    const [login, setLogin] = useState(true);
    useEffect(() => {
        if (login) {
            console.log("welcome aman")
        }
        console.log("login crow");
    }, [login])
    return (
        <div>
            <h1>{login ? "welcome aman" : "login krow"} </h1>
            <button onClick={() => setLogin(!login)}>
                {login ? "logout" : "login"}
            </button>
        </div>
    )
}

export default UE5
