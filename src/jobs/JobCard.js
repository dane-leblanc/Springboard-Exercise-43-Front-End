import React, { useContext, useState, useEffect } from "react";
import "./JobCard.css";
import UserContext from "../users/UserContext";

function JobCard({ job }) {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(
    function updateAppliedStatus() {
      setApplied(hasAppliedToJob(job.id));
    },
    [job.id, hasAppliedToJob]
  );

  async function handleApply(e) {
    if (hasAppliedToJob(job.id)) return;
    applyToJob(job.id);
    setApplied(true);
  }

  return (
    <div className="JobCard card">
      {applied}
      <div className="card-body">
        <h4 className="card-title">{job.title}</h4>
        <h5 className="card-text">{job.companyName}</h5>
        {job.salary && <p className="card-text">Salary: {job.salary}</p>}
        {job.equity && <p className="card-text">Equity: {job.equity}</p>}
        <button
          className="btn btn-danger font-weight-bold"
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
