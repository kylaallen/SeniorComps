import { Link, useParams } from "react-router-dom";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap and Popper.js
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import small_logo from "../assets/small_logo.png";
import PieChart from "./PieChart";
import Review from "./Review";

interface ReviewOutputProps {
  name: string;
  major: string;
  onClick: () => void;
}

const ReviewOutput: React.FC<ReviewOutputProps> = ({
  name,
  major,
  onClick,
}) => {
  const { classItem } = useParams<{ classItem?: string }>();

  // Use a default value or provide a fallback if classItem is undefined
  const currentClassItem = classItem || "Senior Seminar";
  return (
    <div className="reviewoutput-container">
      <h1 className="side-header">
        {classItem}
        <div className="back-home">
          <Link to="/" className={"btn btn-light btn-sm"} onClick={onClick}>
            Home
          </Link>
        </div>
        <div className="search-header">
          <Link
            to="/classreviews"
            className={"btn btn-light btn-sm"}
            onClick={onClick}
          >
            Search
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
      <div className="pie-chart">
        <div className="pie-chart-container">
          <PieChart classItem={classItem} chartId={1} />
        </div>
        <div className="pie-chart-container">
          <PieChart classItem={classItem} chartId={3} />
        </div>
        <div className="pie-chart-container">
          <PieChart classItem={classItem} chartId={5} />
        </div>
        <div className="pie-chart-container">
          <PieChart classItem={classItem} chartId={7} />
        </div>
      </div>
      <div className="pie-chart-1">
        <div className="pie-chart-container">
          <PieChart classItem={classItem} chartId={2} />
        </div>
        <div className="pie-chart-container">
          <PieChart classItem={classItem} chartId={4} />
        </div>
        <div className="pie-chart-container">
          <PieChart classItem={classItem} chartId={6} />
        </div>
        <div className="pie-chart-container">
          <PieChart classItem={classItem} chartId={8} />
        </div>
      </div>
      <div className="single-review">
        <Review classItem={classItem} />
      </div>
    </div>
  );
};

export default ReviewOutput;
