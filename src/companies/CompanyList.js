import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import LoadingSpinner from "../common/LoadingSpinner";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  const companyCards = companies.map((company) => (
    <CompanyCard key={company.handle} company={company} />
  ));

  if (!companies) return <LoadingSpinner />;

  return (
    <div className="col-md-8 offset-md-2">
      <SearchForm search={search} />
      {companyCards}
    </div>
  );
}

export default CompanyList;
