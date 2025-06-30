import React, { useEffect , useState} from 'react'

const InputEffect = () => {

    const [text, setText] = useState('');
    useEffect(()=>{
        console.log("changing text", text)
    },[text])
  return (
    <div>
      <input type="text" placeholder='type ' value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

export default InputEffect
