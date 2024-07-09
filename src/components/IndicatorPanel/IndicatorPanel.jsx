import { useContext } from "react";
import { Indicator } from "../Indicator/Indicator";
import styles from "./IndicatorPanel.module.css";
import { IndicatorsContext } from "../../context/IndicatorsContext/IndicatorsContext";

export const IndicatorPanel = ({ dataCourse, showGraphics }) => {

  const { name } = dataCourse;
  const { indicatorList } = useContext(IndicatorsContext);
  
  return (
    <div>
      <div className={styles.boxParagraph}>
        <p>Curso escogido: <span className={styles.nameCourse}>{name}</span></p>
        <p className={styles.textColorChoose}>Escoge un indicador:</p>
      </div>
      <div className={styles.boxIndicators}>
        {
          indicatorList && indicatorList.map(indicator => <Indicator key={indicator.id} id={indicator.id} name={indicator.name} showGraphics={showGraphics} />)
        }
      </div>
    </div>
  );
};
