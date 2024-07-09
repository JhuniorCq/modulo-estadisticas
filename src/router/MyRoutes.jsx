import { Route, Routes } from "react-router-dom";
import { Statistics } from "../pages/Statistics/Statistics";
import { IndicatorPanel } from "../components/IndicatorPanel/IndicatorPanel";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/statistics" element={<Statistics />}>
        <Route path="/statistics/indicators" element={<IndicatorPanel />} />
      </Route>
      <Route path="/course1" element={<div>Curso 1</div>} />
      <Route path="/course2" element={<div>Curso 2</div>} />
      <Route path="/course3" element={<div>Curso 3</div>} />
      <Route path="/*" element={<div>Error 404</div>} />
    </Routes>
  );
};
