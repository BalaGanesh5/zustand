import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourse } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourse: state.toggleCourse,
    })
  );

  console.log(courses);
  return (
    <>
      {courses?.map((course) => (
        <li
          className={`course-item`}
          key={course.id}
          style={{ backgroundColor: course.completed ? "green" : "red" }}
        >
          <span className="course-item-col-1">
            <input
              type="checkbox"
              checked={course.completed}
              onChange={(e) => toggleCourse(course.id)}
            />
          </span>
          <span>{course?.title}</span>
          <button
            className="delete btn"
            onClick={(e) => removeCourse(course.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default CourseList;
