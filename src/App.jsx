import { Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import StudentsPage from "./pages/StudentsPage.jsx";
import StudentPage from "./pages/StudentPage.jsx";
import AdressStudent from "./components/AdressStudent.jsx";

import ContactStudent from "./components/ContactStudent.jsx";
import InfoPage from "./pages/InfoPage.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/students/:id" element={<StudentPage />}>
            <Route path="adress" element={<AdressStudent />} />

            <Route path="contact" element={<ContactStudent />} />
          </Route>
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
