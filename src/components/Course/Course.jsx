import styles from "./Course.module.css"
import locoCurso from "../../assets/images/logo-curso.png";

export const Course = ({ id, name, period, schedule, showIndicators }) => {
  return (
    <div data-id-course={id} className={styles.boxCourse} onClick={showIndicators}>
      <div className={styles.boxImgCourse}>
        <img className={styles.imgCourse} src={locoCurso} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{`${period} / ${schedule}`}</p>
    </div>
  );
};
