import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentDashboard from "../pages/student/StudentDashboard";
import TutorDashboard from "../pages/tutor/TutorDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student/dashboard" element={<StudentDashboard />} />

        <Route path="/tutor/dashboard" element={<TutorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
