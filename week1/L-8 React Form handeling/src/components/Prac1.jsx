import React, { useState } from 'react'

const Prac1 = () => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Namaste ${name}`);
        setName('');
    } 
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='enter your name'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Prac1
