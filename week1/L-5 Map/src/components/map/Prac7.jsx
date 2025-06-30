import React from 'react'

const Prac7 = () => {
  const Students = [
    { name: 'Aman', hobbies: ['Reading', 'Coding'] },
    { name: 'Ravi', hobbies: ['Cricket', 'Gaming'] }
  ];

  return (
    <div>
      {
        Students.map((student, i) => (
          <div key={i}>
            <h3>{student.name}</h3>
            <ul>
              {
                student.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default Prac7
