import React, { useState } from 'react'

const FeedbackForm2 = () => {
 const [name, setName] = useState('');
    const [email, setEmail] = useState('')
const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Thank you ${name} ${email} for your feedback ${message}`)
        setName('')
        setEmail('')
        
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
    
              <label >
                <input type="radio" value='Male' onChange={(e)=>setGender(e.target.value)} />
    Male 
              </label>
                    <button type='submit'   >Submit</button>
            </form>
  )
}

export default FeedbackForm2
