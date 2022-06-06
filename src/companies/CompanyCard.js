import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ company }) {
  return (
    <Link className="CompanyCard card" to={`/companies/${company.handle}`}>
      <div className="card-body">
        <h5 className="card-title">
          {company.name}{" "}
          {company.logoUrl && (
            <img className="ml-2" src={company.logoUrl} alt="logo" />
          )}
        </h5>
        <p className="card-text">{company.description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
