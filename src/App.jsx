import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import StudentsPage from "./pages/StudentsPage.jsx";
import StudentPage from "./pages/StudentPage.jsx";
import AdressStudent from "./components/AdressStudent.jsx";
import DataStudent from "./components/DataStudent.jsx";
import ContactStudent from "./components/ContactStudent.jsx";
import InfoPage from "./pages/InfoPage.jsx";

const App = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/students"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Students
        </NavLink>
        <NavLink
          to="/info"
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          Info
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/:id" element={<StudentPage />}>
          <Route path="adress" element={<AdressStudent />} />
          <Route path="data" element={<DataStudent />} />
          <Route path="contact" element={<ContactStudent />} />
        </Route>
        <Route path="/info" element={<InfoPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  );
};

export default App;
