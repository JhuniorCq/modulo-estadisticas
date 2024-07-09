import { useContext } from "react";
import { Course } from "../Course/Course";
import styles from "./CoursesPanel.module.css";
import { CoursesContext } from "../../context/CoursesContext/CoursesContext";

export const CoursesPanel = ({ showIndicators }) => {

  const { courseList } = useContext(CoursesContext);

  return (
    <div>
      <div className={styles.boxParagraph}>
        <p className={styles.textColorChoose}>Escoge un curso:</p>
      </div>

      {/* Cada CURSO tendrá un ONCLICK que ejecutará una FUNCIÓN -> a esa misma la crearé acá en Statistics */}
      <div className={styles.boxCourses}>
        {courseList &&
          courseList.map((course) => (
            <Course
              key={course.id}
              id={course.id}
              name={course.name}
              period={course.period}
              schedule={course.schedule}
              showIndicators={showIndicators}
            />
          ))}
      </div>
    </div>
  );
};
