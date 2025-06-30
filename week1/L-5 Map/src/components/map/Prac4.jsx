import React from 'react'

const Prac4 = () => {
    const dogs =[
         "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
    "https://images.dog.ceo/breeds/pug/n02110958_15626.jpg"
    ]
  return (
    <div>
      {
        dogs.map((dog,i)=>(
            <img key={i} src={dog} alt="dogImages" width={200}/>
        ))
      }
    </div>
  )
}

export default Prac4
