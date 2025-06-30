import React, { useEffect, useState } from 'react'

const CharacterCountInInput = () => {
    const [text, setText] = useState('')
    useEffect(()=>{
        console.log("text change", text);
    },[text]);
    const textCount = text.length;
  return (
    <div>
      <input type="text" value={text} placeholder='type....' 
       onChange={(e)=>setText(e.target.value)}/>
       <br />
       <p>the count is: {textCount}</p>
    </div>
  )
}

export default CharacterCountInInput
