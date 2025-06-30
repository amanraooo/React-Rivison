import React from 'react'

const Prac6 = () => {

        const animals = ['Dog', 'Cat', 'Pig', 'Rat'];

        const sayName =(name)=>{
            alert(`Clicked: ${name}`)
        }
      return (
        <div>
          {
            animals.map((animal,i)=>(
                <button key={i} onClick={()=>sayName(animal)}>{animal}</button>
            ))
          }
        </div>
      )


    // const Students = ['Aman', 'Ravi', 'Arzoo', 'Yash', 'Srishti', 'Rohit'];

    // const sayName = (name) => {
    //     alert(`Clicked: ${name}`)
    // }
    
    // return (
    //     <div>
    //         {
    //             Students.map((student, i) => (
    //                 <button
    //                     key={i}
    //                     onClick={() => sayName(student)}
    //                 >
    //                     {student}
    //                 </button>
    //             ))
    //         }
    //     </div>
    // )
}

export default Prac6
