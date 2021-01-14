import React, { useState, useEffect } from "react";

import ProfileList from "./profileList";

const SearchPage = ({ profiles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [profileList, setProfileList] = useState();
  const [profileListDefault, setProfileListDefault] = useState(profiles);

  useEffect(() => {
    return setProfileListDefault(profiles);
  }, [profiles]);

  const updateInput = (e) => {
    e.preventDefault();
    const enteredSearch = e.target.value;
    const filtered = profileListDefault.filter((profile) => {
      return (
        profile.FirstName.toLowerCase().includes(enteredSearch.toLowerCase()) ||
        profile.LastName.toLowerCase().includes(enteredSearch.toLowerCase()) ||
        profile.CreditCardType.toLowerCase().includes(
          enteredSearch.toLowerCase()
        ) ||
        profile.PaymentMethod.toLowerCase().includes(
          enteredSearch.toLowerCase()
        )
      );
    });
    setSearchTerm(enteredSearch);
    setProfileList(filtered);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light ">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by name e.g Uche Nnadi"
          aria-label="Search"
          onChange={(e) => updateInput(e)}
        />
      </nav>

      <ProfileList profileList={profileList} searchTerm={searchTerm} />
    </>
  );
};

export default SearchPage;
