import React, { useEffect, useState } from 'react'

const DogImageRefresh = () => {

    const [image, setImage]= useState('')
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState(null);
    
    const fetchImg =()=>{
        setLoading(true);
        setError(false);
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res)=>{
            if (!res.ok) throw new Error("API not working");
                return res.json();
        }).then((data)=>{
            setImage(data.message);
            setLoading(false)
        }).catch((err)=>{
            setError(true);

        })
        console.log("fething..");
    }

    useEffect(()=>{
        fetchImg();

        const interval = setInterval(fetchImg,5000);
        return() =>{ clearInterval(interval)};
    },[])
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error Occured..{error}</h1>
  return (
    <div>
      <h1>🐶 Random Dog Image (refreshes every 5 seconds)</h1>
      {
        image && (
            <img src={image} alt="dog image" width='300'/>
        )
      }
    </div>
  )
}

export default DogImageRefresh
