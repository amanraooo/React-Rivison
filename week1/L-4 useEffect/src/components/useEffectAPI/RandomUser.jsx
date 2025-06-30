import React, { useEffect, useState } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState(null);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomUser = () => {
    setLoading(true);
    setError(null);
    fetch("https://randomuser.me/api/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data.results[0]); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Random User</h2>
      <img src={user.picture.large} alt="Profile" style={{ borderRadius: '50%' }} />
      <h3>Name: {user.name.first} {user.name.last}</h3>
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.state}, {user.location.country}</p>
      <button onClick={fetchRandomUser}>Fetch Another User</button>
    </div>
  );
};

export default RandomUser;
