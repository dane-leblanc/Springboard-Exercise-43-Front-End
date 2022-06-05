import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";

function CompanyDetails() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompanyDetails() {
      setCompany(await JoblyApi.getCompany(handle));
    }
    getCompanyDetails();
  }, [handle]);

  if (!company) return <LoadingSpinner />;

  return (
    <div>
      <h1>These are the company details for {company.name}</h1>
    </div>
  );
}

export default CompanyDetails;
