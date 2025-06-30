import React, { useState } from 'react'

const Parahgraph = () => {

    const [parah, setParah] = useState(true)
  return (
    <div>
      <p>
         <button onClick={()=>{setParah(!parah)}}>toggle</button>
        {
            parah ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos asperiores nihil itaque dignissimos voluptatem placeat quod provident numquam saepe reprehenderit."
            : "....."
        }
      </p>
    </div>
  )
}

export default Parahgraph
