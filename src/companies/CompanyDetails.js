import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import JobCard from "../jobs/JobCard";
import "./CompanyDetails.css";

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

  let jobCards = company.jobs.map((job) => <JobCard key={job.id} job={job} />);

  return (
    <div className="CompanyDetails mt-4">
      <h2>
        {company.name}
        {company.logoUrl && (
          <img className="ml-2" src={company.logoUrl} alt="logo" />
        )}
      </h2>
      <p>{company.description}</p>
      <p>Employees: {company.numEmployees}</p>
      <div className="col-md-8 offset-md-2">{jobCards}</div>
    </div>
  );
}

export default CompanyDetails;
