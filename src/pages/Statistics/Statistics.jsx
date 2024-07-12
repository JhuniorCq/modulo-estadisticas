import { CoursesPanel } from "../../components/CoursesPanel/CoursesPanel";
import { useNavigate } from "react-router-dom";
import styles from "./Statistics.module.css";

export const Statistics = () => {
  const navigate = useNavigate();

  const showIndicators = ({ currentTarget }) => {
    const idCourse = Number(currentTarget.getAttribute("data-id-course"));
    navigate(`/statistics/courseGraphics/${idCourse}`);
  };

  return (
    <div className={styles.boxStatistics}>
      <div className={styles.boxTitle}>
        <h1 className={styles.title}>ESTADÍSTICAS</h1>
      </div>
      <CoursesPanel showIndicators={showIndicators} />
    </div>
  );
};
