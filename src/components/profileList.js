import React from "react";
import "../profiles.css";

const ProfileList = ({ profileList = [], searchTerm }) => {

  if (searchTerm === "") {
    return null;
  }
  return (
    <main className="profile-list">
      {profileList.map((profile) => {
        if (profile) {
          return (
            <main className="single-profile">
              <div className="list-item" key={profile.CreditCardNumber}>
                <p>
                  Customer Name:{profile.FirstName} {profile.LastName}
                </p>
                {/* <p> Email: {profile.email}</p> */}
                <p> Credit Card Number:{profile.CreditCardNumber}</p>
              </div>
            </main>
          );
        }
        return null;
      })}
    </main>
  );
};

export default ProfileList;
