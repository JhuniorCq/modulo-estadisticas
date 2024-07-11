import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IndicatorsContext } from "../../context/IndicatorsContext/IndicatorsContext";
import { GraphicsPanel } from "../../components/GraphicsPanel/GraphicsPanel";
import styles from "./CourseGraphics.module.css"
import { CoursesContext } from "../../context/CoursesContext/CoursesContext";

export const CourseGraphics = () => {
  const { courseList } = useContext(CoursesContext);
  const { id } = useParams();
  const dataCourse = courseList.find(course => course.id === Number(id));
  // TODO: Ver de ahí si le cambio de nombre a esto
  const { indicatorList } = useContext(IndicatorsContext);
  const { name } = dataCourse;

  const navigate = useNavigate();

  return (
    <div className={styles.boxCourseGraphics}>
      <button onClick={() => navigate(-1)}>Volver</button>
      <h1 className={styles.courseName}>{name}</h1>
      <div className={styles.boxGraphics}>
        {indicatorList.map((indicator) => (
          <GraphicsPanel
            key={indicator.id}
            dataIndicator={indicator}
            dataCourse={dataCourse}
          />
        ))}
      </div>
    </div>
  );
};
