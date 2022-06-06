import React from "react";
import "./JobCard.css";

function JobCard({ job }) {
  return (
    <div className="JobCard card">
      <div className="card-body">
        <h4 className="card-title">{job.title}</h4>
        <h5 className="card-text">{job.companyName}</h5>
        {job.salary && <p className="card-text">Salary: {job.salary}</p>}
        {job.equity && <p className="card-text">Equity: {job.equity}</p>}
      </div>
    </div>
  );
}

export default JobCard;
