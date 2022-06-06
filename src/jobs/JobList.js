import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import JobCard from "./JobCard";
import SearchForm from "../common/SearchForm";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  const jobCards = jobs.map((job) => <JobCard key={job.id} job={job} />);

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="col-md-8 offset-md-2">
      <SearchForm search={search} />
      {jobCards}
    </div>
  );
}

export default JobList;
