import { Link } from "react-router-dom";
import React from "react";
import longphoto from "../assets/longphoto.jpeg";
import blue_logo from "../assets/blue_logo.jpg";

interface HomePageProps {
  color: string;
  onClick: () => void;
}

const HomePage = ({ onClick, color }: HomePageProps) => {
  return (
    <div className="whole-page">
      <h1 className="main-header">
        <div className="rateclass" style={{ display: "inline" }}>
          <Link
            to="/rateclass"
            className={"btn btn-light btn-sm"}
            onClick={onClick}
          >
            Rate a Class
          </Link>
        </div>
        <div className="readreviews" style={{ display: "inline" }}>
          <Link
            to="/classreviews"
            className={"btn btn-light btn-sm"}
            onClick={onClick}
          >
            Read Reviews
          </Link>
        </div>
      </h1>
      <h2 className="home-pageh2">
        <img
          className="logo"
          src={blue_logo}
          alt="Image"
          style={{ width: "50%", height: "50%" }}
        />
        <div className={"about-site"}>
          <p>Course Companion is here to help</p>
          <p>assist you in choosing your next</p>
          <p>Occidental College Computer Science</p>
          <p>Course. Students can either give or</p>
          <p>access feedback on the CS courses we</p>
          <p>have here at Oxy. Hope this helps!</p>
        </div>
      </h2>
      <br></br>
      <div className="text">Check out these popularly rated classes!</div>
      <div className="element-container">
        <div className="home-page-element">
          {" "}
          <p>Junior Seminar with Justin Li</p>
          <Link
            to="/ReviewOutput/Junior%20Seminar"
            className={"btn btn-light btn-sm"}
            onClick={onClick}
          >
            Senior Seminar
          </Link>
        </div>
        <div className="home-page-element">
          <p>
            Mathematical Foundations of Computer Science with Hsing-Hau Chen
          </p>
          <Link
            to="/ReviewOutput/Mathematical%20Foundations%20of%20Computer%20Science"
            className={"btn btn-light btn-sm"}
            onClick={onClick}
          >
            Mathematical Foundations of Computer Science
          </Link>
        </div>
        <div className="home-page-element">
          <p>Fundamentals of Computer Science with Hsing-Hau Chen</p>
          <Link
            to="/ReviewOutput/Fundamentals%20of%20Computer%20Science"
            className={"btn btn-light btn-sm"}
            onClick={onClick}
          >
            Fundamentals of Computer Science
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
