import styles from "./Course.module.css"
import locoCurso from "../../assets/images/logo-curso.png";
// Por ahora IMPORTARÉ EL LOGO DEL CURSO ACÁ -> ESTE LOGO SERÁ EL MISMO PARA TODOS LOS CURSOS

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
