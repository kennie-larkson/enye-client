// import dotenv from "dotenv";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Profiles from "./components/profiles";
import Paginate from "./components/pagination";
import SearchPage from "./components/searchpage";

const url = process.env.REACT_APP_API_URL;

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(20);

  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);

      const {
        data: {
          records: { profiles },
        },
      } = response;
      setProfiles(profiles);
      setLoading(false);
    } catch (error) {
      console.log(`Oops!: ${error}`);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  //get current profiles
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="App container mt-4">
      <h1 className="text-primary mb-3">Enye - List of Customer Records </h1>
      <h3 className="text-primary mb-3">
        <p>
          Search our customer records either by customer name, credit card type,
          gender or payment method{" "}
        </p>
      </h3>
      <SearchPage profiles={profiles} />
      <Profiles profiles={currentProfiles} loading={loading} />
      <Paginate
        profilesPerPage={profilesPerPage}
        totalProfiles={profiles.length}
        paginate={paginate}
      />
    </main>
  );
}

export default App;
