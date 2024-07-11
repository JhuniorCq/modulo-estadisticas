import { FaBookBookmark } from "react-icons/fa6";
import { CoursesContext } from "./CoursesContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGet } from "../../hooks/useGet";

export const CoursesProvider = ({ children }) => {
  const [courseList, setCourseList] = useState([
    {
      id: 1,
      path: "/statistics/courseGraphics/1",
      name: "Algorítmica II",
      period: "Periodo 1",
      schedule: "8:00 am - 12:00 pm",
      icon: <FaBookBookmark /> || "Icono",
    },
    {
      id: 2,
      path: "/statistics/courseGraphics/2",
      name: "Base de Datos I",
      period: "Periodo 2",
      schedule: "5:00 pm - 10:00 pm",
      icon: <FaBookBookmark /> || "Icono",
    },
    {
      id: 3,
      path: "/statistics/courseGraphics/3",
      name: "Diseño de Software",
      period: "Periodo 3",
      schedule: "1:00 pm - 6:00 pm",
      icon: <FaBookBookmark /> || "Icono",
    },

  ]);

  // const {responseGet, loadingGet, errorGet} = useGet("")



  return (
    <CoursesContext.Provider value={{ courseList }}>
      {children}
    </CoursesContext.Provider>
  );
};
