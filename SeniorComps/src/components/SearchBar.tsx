import React, { useState } from "react";
import { Link } from "react-router-dom";

interface SearchBarProps {
  name: string;
  major: string;
}

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const classes: SearchBarProps[] = [
    { name: "Justice and Equity in Technology", major: "Computer Science" },
    { name: "Fundamentals of Computer Science", major: "Computer Science" },
    { name: "Statistics", major: "Computer Science" },
    {
      name: "Mathematical Foundations of Computer Science",
      major: "Computer Science",
    },
    { name: "Advanced Programming", major: "Computer Science" },
    { name: "Data Structures", major: "Computer Science" },
    { name: "Computer Organization", major: "Computer Science" },
    {
      name: "Haptic Media: Play, Games, Visuality, and Creative Approaches to Communicating Touch at a Distance",
      major: "Computer Science",
    },
    {
      name: "Topics in Computer Science. Automation: Politics and Aesthetics",
      major: "Computer Science",
    },
    { name: "Computer Graphics", major: "Computer Science" },
    { name: "Information Theory", major: "Computer Science" },
    { name: "Networking", major: "Computer Science" },
    { name: "Mobile Apps", major: "Computer Science" },
    { name: "Junior Seminar", major: "Computer Science" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredCountries = classes.filter((Class) => {
    return Class.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div className="SearchBarForRating">
      <input
        className="bar"
        type="search"
        placeholder="Search here to see reviews for a class"
        onChange={handleChange}
        value={searchInput}
      />

      <table className="search-bar-table">
        <thead>
          <tr>
            <th>Class</th>
            <th></th>
            <th> Major</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((classItem, index) => (
            <tr key={index}>
              <td>
                <Link
                  to={`/ReviewOutput/${classItem.name}`}
                  style={{ color: "#ff9500" }}
                >
                  {classItem.name}
                </Link>
              </td>
              <td> </td>
              <td>{classItem.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
