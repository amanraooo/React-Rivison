import React from 'react'

const Prac3 = () => {

    const scores = [30, 40, 50, 60, 70, 80];
  return (
    <div>
      {
        scores.map((score, i)=>(
            <li key={i}>
                {score} - {score <= 40 ? 'fail' : 'pass'}
            </li>
        ))
      }
    </div>
  )
}

export default Prac3
