import "./App.css";
import CourseForm from "./components/CourseForm";
import { useEffect } from "react";
import CourseList from "./components/CourseList";

function App() {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        {" "}
        My Course list
      </h1>
      <p>used zustand for state Management</p>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
