import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="text-center">
        <div className="alert alert-danger px-5">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
        </div>

        <Link to="/" className="btn btn-warning px-5 py-3 btn-lg" style={{borderRadius:'10px'}}>
          Back to Movies
        </Link>
      </div>
    </div>
  );
}
