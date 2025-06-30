import React, { useState } from 'react'

const RandomJokes = () => {

    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const randomJoke=()=>{
        setLoading(true);
    setError(null);
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then((res)=>{
                if(!res.ok){
                    throw new error("something went wrong")
                }
                return res.json();
            })
            .then((data)=>{
                setJoke(data);
                setLoading(false);
            })
            .catch((err)=>{
                setError(err.message)
                setLoading(false);

            })  
    }
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
  return (
    <div>
      {joke && (
        <div>
          <p><strong>Setup:</strong> {joke.setup}</p>
          <p><strong>Punchline:</strong> {joke.punchline}</p>
        </div>
      )}
      <button onClick={randomJoke}>fectch joke</button>

    </div>
  )
}

export default RandomJokes
