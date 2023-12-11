import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap and Popper.js
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import SearchBar from "./SearchBar";
import small_logo from "../assets/small_logo.png";

interface ClassReviewsProps {
  color: string;
  onClick: () => void;
}

const ClassReviews = ({ onClick, color }: ClassReviewsProps) => {
  return (
    <div>
      <h1>
        <div className="back-home">
          <Link to="/" className={"btn btn-light btn-sm"} onClick={onClick}>
            Home
          </Link>
        </div>
        <div className={"small-logo"}>
          <img
            src={small_logo}
            style={{ width: 55, height: "auto", right: 0 }}
            alt="Image"
          />
        </div>
      </h1>
      <div className="SearchBar">
        <SearchBar />
      </div>
    </div>
  );
};

export default ClassReviews;
