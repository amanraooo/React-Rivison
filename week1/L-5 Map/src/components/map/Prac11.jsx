import React from 'react'
import Card from './Card'

const Prac11 = () => {
    const people = [
        { name: 'aman', age: 21 },
        { name: 'ravi', age: 38 },
        { name: 'rohit', age: 22 }
    ]
    return (
        <div>
            {
                people.map((p, i) => (
                    <Card key={i} name={p.name} age={p.age} />
                ))
            }
        </div>
    )
}

export default Prac11
