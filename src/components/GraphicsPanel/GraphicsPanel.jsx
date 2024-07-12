import styles from "./GraphicsPanel.module.css";
import { Graphics } from "../Graphics/Graphics";
import { Select } from "../Select/Select";
import { useGet } from "../../hooks/useGet";

export const GraphicsPanel = ({ dataIndicator, dataCourse }) => {
  const {responseGet: studentData, loadingGet, errorGet} = useGet("https://springbootreact-7w44.onrender.com/api/v1/alumnos");

  return (
    <div className={styles.boxGraphicPanel}>
      <h2>{dataIndicator.name}</h2>


      {dataIndicator.id !== 2 ? (
        <div>
          <Select studentData={studentData} idIndicator={dataIndicator.id} />
        </div>
      ) : null}

      <div className={styles.boxGraphic}>
        <Graphics studentData={studentData} dataIndicator={dataIndicator} necessaryInformation={null} />
      </div>
    </div>
  );
};
