import React, { useState, useEffect } from 'react'

const CurrencyConverter = () => {

    const [rates, setRates] = useState({});
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(res => res.json())
      .then(data => setRates(data.rates));
  }, []);

    const convert =()=>{
        const rate = rates[currency]; 
        setResult(amount*rate)
    }

  return (
    <div>
      <h1>USD to {currency}</h1>
        
    <input type="number" placeholder='enter amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>

    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="">Select currency</option>
        {Object.keys(rates).map((curr) => (
          <option key={curr} value={curr}>{curr}</option>
        ))}
      </select>
      <button onClick={convert}>Convert</button>

      {result && (
        <h3>{amount} USD = {result.toFixed(2)} {currency}</h3>
      )}
    </div>
  )
}

export default CurrencyConverter
