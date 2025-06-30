import React from 'react'

const Prac2 = () => {

    const users = [
        {name: 'Aman', age : 20},
        {name: 'Ravi', age: 25}
    ];
  return (
    <div>
      {
        users.map((user, i)=>(
            <div key={i}>
                <h3>the name is {user.name} </h3>
                <p>and age is {user.age} years old</p>
            </div>
        ))
      }
    </div>
  )
}

export default Prac2
