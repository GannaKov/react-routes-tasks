import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Student from "./components/Student.jsx";
import Result from "./components/Result.jsx";

const App = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/students/2"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Student
        </NavLink>
        <NavLink
          to="/results/john"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Result
        </NavLink>
      </nav>

      <Routes>
        <Route path="/students/:id" element={<Student />} />
        <Route path="/results/:name" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
