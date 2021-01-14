import React from "react";
import "../profiles.css";

const Profile = ({ profile }) => {
  const {
    FirstName,
    LastName,
    CreditCardNumber,
    CreditCardType,
    PaymentMethod,
  } = profile;
  return (
    <>
      {/* <h2>This is a single profile</h2> */}
      <div className="single-profile ">
        <h5 className="mt-3 mb-3">Customer Name: {FirstName} {LastName}</h5>
        <h5 className="mt-3 mb-3">Credit Card Number: {CreditCardNumber}</h5>
        <h5 className="mt-3 mb-3">Credit Card Type: {CreditCardType}</h5>
        <h5 className="mt-3 mb-3">Payment Method: {PaymentMethod}</h5>
      </div>
    </>
  );
};

export default Profile;
