import React from "react";

const TitlePage = ({ title }) => {
  return (
    <div>
      <h1 style={{margin:0}} className="font-weight-bold">{title}</h1>
      <hr style={{ border: "1px solid #00b3c5", width: 100 }}></hr>
    </div>
  );
};

export default TitlePage;
