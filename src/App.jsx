import "./App.css";
import CourseForm from "./app/components/CourseForm";
import CourseList from "./app/components/CourseList";

function App() {
  return (
    <div className="main-container">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        My course list
      </h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
