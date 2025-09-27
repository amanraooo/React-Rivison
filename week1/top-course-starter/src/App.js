import React from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';

const App = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar/>

      {/* all filters */}
      <Filter/>

      {/* all cards */}
      <Cards/>

    </div>);
};

export default App;
