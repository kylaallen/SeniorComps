import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RateClass from "./components/RateClass";
import ReviewOutput from "./components/ReviewOutput";
import ClassReviews from "./components/ClassReviews";
import SearchBar from "./components/SearchBar";
import "./styles.css";
import SearchBarForRating from "./components/SearchBarForRating";
import RateOutput from "./components/RateOutput";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/rateclass"
            element={
              <RateClass
                color="success"
                onClick={() => console.log("Clicked!")}
              />
            }
          />
          <Route
            path="/"
            element={
              <HomePage color="blue" onClick={() => console.log("Clicked!")} />
            }
          />
          <Route
            path="/classreviews"
            element={
              <ClassReviews
                color="success"
                onClick={() => console.log("Clicked!")}
              />
            }
          />
          <Route
            path="/ReviewOutput/:classItem"
            element={
              <ReviewOutput
                name="name"
                major="major"
                onClick={() => console.log("Clicked!")}
              />
            }
          />
          <Route
            path="/RateOutput/:classItem"
            element={
              <RateOutput
                name="name"
                major="major"
                onClick={() => console.log("Clicked!")}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
