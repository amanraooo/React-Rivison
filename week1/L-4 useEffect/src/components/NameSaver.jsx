import React, { useEffect, useState } from 'react'

const NameSaver = () => {

    const [name, setName] = useState('');

    useEffect(()=>{
        const savedName = localStorage.getItem("name");
        if (savedName) {
            setName(savedName)
        }
    },[])
    useEffect(()=>{
         localStorage.setItem("name", name);
       
    },[name])
  return (
    <div>
      <h2>welcome: {name}</h2>
      <input type="text" value={name} placeholder='type....' 
       onChange={(e)=>setName(e.target.value)}/>
       <br />
    </div>
  )
}

export default NameSaver
