import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState(" ");
  console.log("courseRendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please enter a course title");
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
    });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        className="form-input"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button className="form-submit-btn" onClick={handleCourseSubmit}>
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
