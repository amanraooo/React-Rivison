import React ,{useEffect}from 'react'

const UE1 = () => {

    useEffect(() => {
        console.log("Component Mounted");
      }, []);
  return (
    <div>
     hello
    </div>
  )
}

export default UE1
