import { useState } from "react";
import useCourseStore from "../store";
const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");
  console.log("course form render");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please enter a title");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        className="form-input"
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
      />
      <button className="form-submit-btn" onClick={handleCourseSubmit}>
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
