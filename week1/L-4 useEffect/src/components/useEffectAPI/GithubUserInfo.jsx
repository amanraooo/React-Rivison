import React, { useState } from 'react'

const GithubUserInfo = () => {

    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUserData = () => {
        setLoading(true);
        setError(null);
        setUserData(null);

        fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
                if (!res.ok) {
                    throw new error("api not responding")
                }
                return res.json();
            })
            .then((data) => {
                setUserData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
            })
    }
    if (loading) return <h1>Loading..</h1>
    if (error) return <h1>error...{error}</h1>

    return (
        <div>
            <input type="text" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={fetchUserData}>search</button>
            {userData && (
        <div >
          <img src={userData.avatar_url} alt="avatar" width="150" style={{ borderRadius: '50%' }} />
          <h3>{userData.name}</h3>
          <p>{userData.bio}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
        </div>
    )
}

export default GithubUserInfo
