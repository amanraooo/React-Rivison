import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const DogImages = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/5')
            .then((response) => {
                if (!response.ok) {
                    throw new error('Something went wrong!');
                }
                return response.json()
            })
            .then((data) => {
                setData(data.message);
                setLoading(false);
            })
            .then((error) => {
                setError(error.message);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div>LOADING.....</div>
    }
    if (error) {
        return <div>Error aya : {error}</div>
    }
    return (
        <div>
            <h1>Random Dog Images</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt="Dog"
                        style={{ width: '200px', height: '200px', margin: '10px' }}
                    />
                ))}
            </div>
        </div>
    )
}

export default DogImages
