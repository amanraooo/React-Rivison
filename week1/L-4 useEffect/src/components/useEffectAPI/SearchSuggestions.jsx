import React, { useEffect, useState } from 'react'

// const suggestionsData = [
//   "apple", "banana", "grape", "orange", "pineapple",
//   "mango", "watermelon", "peach", "kiwi", "strawberry"
// ];
const SearchSuggestions = () => {

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([])
    const [debouncedQuery, setDebouncedQuery] = useState('')


    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);


    useEffect(() => {
        if (debouncedQuery.trim() === '') {
            setSuggestions([]);
            return;
        }

        //     const filtered = suggestionsData.filter(item =>
        //       item.toLowerCase().includes(debouncedQuery.toLowerCase())
        //     );
        //     setSuggestions(filtered);
        //   }, [debouncedQuery]);

        // fetching data from wikipedia instead of dummy data 
        fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${debouncedQuery}&limit=5&origin=*&format=json`)
            .then(res => res.json())
            .then(data => {
                setSuggestions(data[1]); // Wikipedia sends suggestions in data[1]
            })
            .catch(err => {
                console.error("Error fetching Wikipedia data", err);
                setSuggestions([]);
            });
    }, [debouncedQuery]);

    return (
        <div>
            <input type="text" value={query} onChange={(e) => { setQuery(e.target.value) }} />
            <ul>
                {suggestions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchSuggestions
