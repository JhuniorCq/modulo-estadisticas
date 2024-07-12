import { FaBookBookmark } from "react-icons/fa6";
import { CoursesContext } from "./CoursesContext";
import { useGet } from "../../hooks/useGet";

export const CoursesProvider = ({ children }) => {
  const {responseGet: courseDetails, loadingGet, errorGet} = useGet("https://springbootreact-7w44.onrender.com/api/v1/cursos");

  const courseList = courseDetails.map(course => {
    return {
      id: course.id,
      path: `/statistics/courseGraphics/${course.id}`,
      name: course.sumilla,
      period: course.ciclo,
      schedule: `${course.hora_inicio} - ${course.hora_fin}`,
      icon: <FaBookBookmark /> || "Icono"
    }
  });

  return (
    <CoursesContext.Provider value={{ courseList }}>
      {children}
    </CoursesContext.Provider>
  );
};
