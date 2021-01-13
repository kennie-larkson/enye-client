import React from "react";
import Profile from "./profile";
import "../profiles.css";

const Profiles = ({ profiles, loading }) => {
  if (loading) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }
  return (
    <main className="profiles ">
      {/* <ul className="list-group mb4 "> */}
      <ul className="profile-list ">
        {profiles.map((profile, index) => {
          return (
            <li className="list-group-item list-items" key={index}>
              <Profile profile={profile} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Profiles;
