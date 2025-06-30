import React, { useEffect, useState } from 'react';

const OneDogImg = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchDogImage = () => {
    setLoading(true);
    setError(null);

    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then((data) => {
        setImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  
  useEffect(() => {
    fetchDogImage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Random Dog Image</h1>
      <img src={image} alt="Dog" style={{ width: '300px', height: '300px' }} />
      <br />
      <button onClick={fetchDogImage}>Fetch Another Dog</button>
    </div>
  );
};

export default OneDogImg;
