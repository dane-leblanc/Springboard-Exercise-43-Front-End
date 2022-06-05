import React from "react";
import { useParams } from "react-router-dom";

function CompanyDetails() {
  const { handle } = useParams();

  return (
    <div>
      <h1>These are the company details for {handle}</h1>
    </div>
  );
}

export default CompanyDetails;
