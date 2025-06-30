import React, { useEffect, useState } from 'react'

const CountrySearcher = () => {

    const [allCountries, setAllCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => {
                if (!res.ok) throw new error('api not working')
                    return res.json();
            })
        

   
        .then((data) => {
            const sortedData = data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );
            setAllCountries(sortedData);
            setFilteredCountries(sortedData)
            setLoading(false);

        })
        .catch((err) => {
            setLoading(false)
            setError(err.message);
        })
 },[])
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = allCountries.filter((country) =>
            country.name.common.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredCountries(filtered);


        if(loading){
            <h1>loading..</h1>
        }
        if(error){
            <h1>error:{error}</h1>
        }
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>🌍 Country Searcher</h2>
            <input
                type="text"
                placeholder="Search country..."
                value={searchTerm}
                onChange={handleSearch}
                style={{ padding: '8px', width: '250px', marginBottom: '20px' }}
            />
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredCountries.map((country) => (
                    <li key={country.cca3}>{country.name.common}</li>
                ))}
            </ul>
        </div>
    )
}

export default CountrySearcher
