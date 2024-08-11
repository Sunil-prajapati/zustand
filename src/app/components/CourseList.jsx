import React from "react";
import useCourseStore from "../store";
const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  return (
    <>
      <ul>
        {courses?.map((course, index) => {
          return (
            <React.Fragment key={index}>
              <li
                className="course-item"
                style={{
                  backgroundColor: course.completed ? "#00FF0044" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    onChange={() => {
                      toggleCourseStatus(course?.id);
                    }}
                    type="checkbox"
                  />
                </span>
                <span style={{ color: course.completed ? "white" : "black" }}>
                  {course?.title}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => removeCourse(course.id)}
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
