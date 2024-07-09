import { useState } from "react";
import { IndicatorsContext } from "./IndicatorsContext";

export const IndicatorsProvider = ({ children }) => {
  const [indicatorList, setIndicatorData] = useState([
    {
      id: 1,
      name: "Rendimiento Individual del Estudiante",
    },
    {
      id: 2,
      name: "Rendimiento General del Curso",
    },
    {
      id: 3,
      name: "Ranking de Estudiantes",
    },
    {
      id: 4,
      name: "Tasa de Aprobación"
    }
  ]);

  return (
    <IndicatorsContext.Provider value={{ indicatorList }}>
      {children}
    </IndicatorsContext.Provider>
  );
};
