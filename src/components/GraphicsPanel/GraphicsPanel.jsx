import styles from "./GraphicsPanel.module.css";
import { Graphics } from "../Graphics/Graphics";
import { Select } from "../Select/Select";

export const GraphicsPanel = ({ dataIndicator, dataCourse }) => {

  return (
    <div className={styles.boxGraphicPanel}>
      <h2>{dataIndicator.name}</h2>


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
