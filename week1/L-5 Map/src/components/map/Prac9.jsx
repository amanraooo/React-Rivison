import React, { useState } from 'react'

const Prac9 = () => {

    const [tasks, setTasks] = useState([
        { name: 'study', done: true },
        { name: 'workout', done: false }
    ])


    return (
        <div>
            {
                tasks.map((task, i) => (
                    <li key={i}
                        style={{ textDecoration: task.done ? 'line-through' : 'none' }}
                    >
                        {task.name}
                    </li>
                ))
            }
        </div>
    )
}

export default Prac9
