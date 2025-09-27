import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify"

const App = () => {

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch (error) {
        toast.error("Something went wrong")
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* all filters */}
      <Filter filterData={filterData} />

      {/* all cards */}
      <Cards courses={courses} />

    </div>);
};

export default App;
