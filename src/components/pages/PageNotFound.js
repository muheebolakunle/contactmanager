import React from "react";

export default function PageNotFound() {
  return (
    <div>
      <h1 className="display-4 mb-2">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">The page you requested does not exist</p>
    </div>
  );
}
