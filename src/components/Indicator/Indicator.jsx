import { useState } from "react";
import logoIndicador from "../../assets/images/logo-indicador.png";
import styles from "./Indicator.module.css";
// Por ahora IMPORTARÉ EL LOGO DEL INDICADOR ACÁ -> ESTE LOGO SERÁ EL MISMO PARA TODOS LOS INDICADORES

export const Indicator = ({ id, name, showGraphics }) => {

  return (
    <div data-id-indicator={id} className={styles.indicator} onClick={showGraphics}>
      <div className={styles.boxIndicator}>
        <img className={styles.imgIndicator} src={logoIndicador} alt={name} />
      </div>
      <p className={styles.nameIndicator}>{name}</p>
    </div>
  );
};
