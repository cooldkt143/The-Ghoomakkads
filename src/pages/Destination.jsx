import React from "react";
import Body from "../components/Body";
import Header from "../components/Header"; // import your header/topbar component

const Destination = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main Section */}
      <div className="pt-0"> {/* Add padding-top to avoid content under fixed header */}
        <Body />
      </div>
    </div>
  );
};

export default Destination;
