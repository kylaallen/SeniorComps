import { Link } from "react-router-dom";
import React from "react";
import small_logo from "../assets/small_logo.png";
import SearchBarForRating from "./SearchBarForRating";

interface RateClassProps {
  color: string;
  onClick: () => void;
}

const RateClass = ({ onClick, color }: RateClassProps) => {
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
      <div className="SearchBarForRating">
        <SearchBarForRating />
      </div>
    </div>
  );
};

export default RateClass;
