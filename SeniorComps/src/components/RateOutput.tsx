import { Link, useParams } from "react-router-dom";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap and Popper.js
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import small_logo from "../assets/small_logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ChangeEvent, useState } from "react";

interface RateOutputProps {
  name: string;
  major: string;
  onClick: () => void;
}
interface AdditionalValues {
  [key: string]: string;
}

const RateOutput: React.FC<RateOutputProps> = ({ name, major, onClick }) => {
  const { classItem } = useParams<{ classItem: string }>();
  const [selectedOption, setSelectedOption] = useState<string>("1");
  const [additionalValues, setAdditionalValues] = useState<{
    [key: string]: string;
  }>({});

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleAdditionalValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const option = selectedOption;
    const value = event.target.value;

    setAdditionalValues((prev) => ({
      ...prev,
      [option]: value,
    }));
  };
  const grading_options = [
    "Tests",
    "Quizzes",
    "Presentations",
    "Participation",
    "Group Projects",
    "Projects",
    "Final(s)",
    "Midterm(s)",
    "Student Led Discussions",
    "Homework",
    "Papers",
    "Contract Grading",
    "Lab",
    "Lab Reports",
    "Other",
  ];
  const teaching_options = [
    "Lecture",
    "Group Work",
    "Student Presentations",
    "Discussion",
    "Solo Work",
    "Student Led Discussion",
    "Lab",
    "Other",
  ];

  return (
    <div className="rate-output">
      <h1 className="side-header">
        {classItem}
        <div className="back-home">
          <Link to="/" className={"btn btn-light btn-sm"} onClick={onClick}>
            Home
          </Link>
        </div>
        <div className="search-header">
          <Link
            to="/rateclass"
            className={"btn btn-ligh btn-sm"}
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
      <br></br>
      <Form>
        {/* Name  */}
        <Form.Group className="rate-form" controlId="formBasicName">
          <Form.Label className="form-title">Name:</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
          <Form.Text className="text-muted">
            If you'd prefer to stay anonymous, leave this option blank.
          </Form.Text>
        </Form.Group>
        <br></br>

        {/* Date  */}
        <Form.Group className="rate-form" controlId="formBasicDate">
          <Form.Label className="form-title">Date:</Form.Label>
          <Form.Control type="Date" placeholder="Enter Date" />
        </Form.Group>
        <br></br>

        {/* Professor Name  */}
        <Form.Group className="rate-form" controlId="formBasicName">
          <Form.Label className="form-title">Professor Name:</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter the Professor's First and Last Name"
          />
        </Form.Group>
        <br></br>

        {/* Teaching Style */}
        <div className="rate-form">
          <Form.Group>
            <Form.Label className="form-title">Teaching Style</Form.Label>
            <Form.Control
              as="select"
              value={selectedOption}
              onChange={handleSelectChange as any}
            >
              {teaching_options.map((teaching_option, index) => (
                <option key={index} value={(index + 1).toString()}>
                  {teaching_option}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          {selectedOption !== "0" && (
            <Form.Group>
              <Form.Label>
                Additional value for{" "}
                {teaching_options[parseInt(selectedOption) - 1]}:
              </Form.Label>
              <Form.Control
                type="text"
                value={additionalValues[selectedOption] || ""}
                onChange={handleAdditionalValueChange}
              />
            </Form.Group>
          )}
        </div>
        <br></br>

        {/* Grading Style */}
        <div className="rate-form">
          <Form.Group>
            <Form.Label className="form-title">Grading Style</Form.Label>
            <Form.Control
              as="select"
              value={selectedOption}
              onChange={handleSelectChange as any}
            >
              {grading_options.map((grading_option, index) => (
                <option key={index} value={(index + 1).toString()}>
                  {grading_option}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          {selectedOption !== "0" && (
            <Form.Group>
              <Form.Label>
                Additional value for{" "}
                {grading_options[parseInt(selectedOption) - 1]}:
              </Form.Label>
              <Form.Control
                type="text"
                value={additionalValues[selectedOption] || ""}
                onChange={handleAdditionalValueChange}
              />
            </Form.Group>
          )}
        </div>
        <br></br>

        {/* Difficulty */}
        <Form.Group className="rate-form">
          <Form.Label className="form-title">
            On a Scale of 1-10, how difficult was this class?
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Select>
        </Form.Group>
        <br></br>

        {/* Enjoyment */}
        <Form.Group className="rate-form">
          <Form.Label className="form-title">
            On a Scale of 1-10, how much did you enjoy the class?
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Select>
        </Form.Group>
        <br></br>

        {/* Likes */}
        <Form.Group className="rate-form" controlId="ControlTextarea1">
          <Form.Label className="form-title">Likes:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Share some things you liked about taking this class"
          />
        </Form.Group>
        <br></br>

        {/* Dislikes */}
        <Form.Group className="rate-form" controlId="ControlTextarea1">
          <Form.Label className="form-title">Dislikes:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Share some things you disliked about taking this class"
          />
        </Form.Group>
        <br></br>

        {/* Other */}
        <Form.Group className="rate-form" controlId="ControlTextarea1">
          <Form.Label className="form-title">Other:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Any other Comments?"
          />
        </Form.Group>
        <br></br>

        {/* Take Again? */}
        <Form.Group className="rate-form" controlId="formBasicCheckbox">
          <Form.Check
            className="form-title"
            type="checkbox"
            label="Would you take this class again? (Check for Yes)"
          />
        </Form.Group>

        {/* Take For Major? */}
        <Form.Group className="rate-form" controlId="formBasicCheckbox">
          <Form.Check
            className="form-title"
            type="checkbox"
            label="Did you take this class for your major? (Check for Yes)"
          />
        </Form.Group>
        {/* Accountability */}
        <Form.Group className="rate-form" controlId="formBasicCheckbox">
          <Form.Check
            className="form-title"
            type="checkbox"
            label="Are you sure the content of this review is appropriate for public consumption? (Check for Yes)"
          />
        </Form.Group>

        {/* Submit Button */}
        <Button
          variant="primary"
          type="submit"
          style={{ marginBottom: 30, marginLeft: 170, marginTop: 20 }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RateOutput;
