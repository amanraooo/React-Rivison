import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify"
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong")
    }
    setLoading(false);

  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* navbar */}
      <div>
        <Navbar />
      </div>

      {/* all filters */}
      <div>
        <Filter filterData={filterData} />

      </div>

      {/* all cards */}
      <div>
        {
          loading ? (<Spinner />) :
           (<Cards courses={courses} />
          )
        }
      </div>

    </div>);
};

export default App;
