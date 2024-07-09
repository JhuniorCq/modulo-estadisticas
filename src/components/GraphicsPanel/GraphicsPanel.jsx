import styles from "./GraphicsPanel.module.css";
import { Graphics } from "../Graphics/Graphics";
import { Select } from "../Select/Select";

export const GraphicsPanel = ({ dataIndicator, dataCourse }) => {
  // Debo hacer un SWITCH o un IF para CONDICIONAR si es el INDICADOR 1 , 2 o 3
  return (
    <div className={styles.boxGraphicPanel}>
      <div>
        <h2>{dataIndicator.name}</h2>
      </div>

      <div>
        <p>
          Curso: <span className={styles.nameCourse}>{dataCourse.name}</span>
        </p>
      </div>

      {dataIndicator.id !== 2 ? (
        <div>
          <Select idIndicator={dataIndicator.id} />
        </div>
      ) : null}

      <div className={styles.boxGraphic}>
        <Graphics dataIndicator={dataIndicator} necessaryInformation={null} />
      </div>
    </div>
  );
};
