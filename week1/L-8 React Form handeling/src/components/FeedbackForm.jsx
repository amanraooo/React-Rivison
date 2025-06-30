import React, { useState } from 'react'

const FeedbackForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Thank you ${name} ${email} for your feedback ${message}`)
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder='enter your name'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
    <br />
            <input type="email"
                placeholder='enter your email'
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
    <br />

            <textarea type="text"
                placeholder='give feedback'
                value={message}
                 onChange={(e) => { setMessage(e.target.value) }}
            />
    <br />

                <button type='submit'  disabled={!name || !email || !message} >Submit</button>
        </form>
    )
}

export default FeedbackForm
