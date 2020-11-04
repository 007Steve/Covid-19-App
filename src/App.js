import './App.css';
import Card from './Card';
import React, { useState, useEffect } from 'react';
function App() {
 const [data,setData] = useState ([])

 const newConfirmedData = data.NewConfirmed
 const totalConfirmedData = data.TotalConfirmed
 const totalDeathsData = data.TotalDeaths
 const totalRecoveredData = data.TotalRecovered
 
 
  useEffect(() => {
    
    async function fetchData() {
      fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then(data => setData(data.Global) )
      
  }
      fetchData()
  }, [])

console.log()

  return (
    <div className="App">
    <Card newConfirmed={newConfirmedData} totalConfirmed={totalConfirmedData} totalDeaths={totalDeathsData} totalRecovered={totalRecoveredData} />

    </div>
  );
}

export default App;
