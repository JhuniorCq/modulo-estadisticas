import { Route, Routes } from "react-router-dom";
import { Statistics } from "../pages/Statistics/Statistics";
import { CourseGraphics } from "../pages/CourseGraphics/CourseGraphics";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/statistics/courseGraphics/:id" element={<CourseGraphics />} />
      <Route path="/course1" element={<div>Curso 1</div>} />
      <Route path="/course2" element={<div>Curso 2</div>} />
      <Route path="/course3" element={<div>Curso 3</div>} />
      <Route path="/*" element={<div>Error 404</div>} />
    </Routes>
  );
};
