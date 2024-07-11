import { useContext, useState } from "react";
import styles from "./Statistics.module.css";
import { CoursesContext } from "../../context/CoursesContext/CoursesContext";
import { IndicatorPanel } from "../../components/IndicatorPanel/IndicatorPanel";
import { GraphicsPanel } from "../../components/GraphicsPanel/GraphicsPanel";
import { IndicatorsContext } from "../../context/IndicatorsContext/IndicatorsContext";
import { CoursesPanel } from "../../components/CoursesPanel/CoursesPanel";
import { useNavigate } from "react-router-dom";

export const Statistics = () => {
  const { courseList } = useContext(CoursesContext);
  const { indicatorList } = useContext(IndicatorsContext);
  const [seeIndicators, setSeeIndicators] = useState(false);
  const [seeGraphics, setSeeGraphics] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [selectedIndicator, setSelectedIndicator] = useState({});
  const navigate = useNavigate();

  // El currentTarget es una PROPIEDAD del OBJETO "event" y cuando se DÉ el EVENTO esta propiedad me devolverá al ELEMENTO en donde se aplicó el "onClick",
  // a diferencia del target, que me da el ELEMENTO al cual el Usuario dio CLICK.
  const showIndicators = ({ target, currentTarget }) => {
    console.log("Mostrando indicadores", target, currentTarget);
    const idCourse = Number(currentTarget.getAttribute("data-id-course"));
    
    // Acá ya tengo los DATOS del CURSO SELECCIONADO
    // const dataCourse = courseList.find(course => course.id === idCourse);
    // setSelectedCourse(dataCourse);

    // console.log(dataCourse);

    // Tal vez puedo CREAR un ESTADO para almacenar al CURSO SELECCIONADO -> YA LO CREE XD  

    // setSeeIndicators(true);

    // Este estaba usando ahora
    // setSeeGraphics(true); 
    navigate(`/statistics/courseGraphics/${idCourse}`)
  };

  // const showGraphics = ({ currentTarget }) => {
    
  //   console.log("El indicador seleccionado es: ", currentTarget);
  //   const idIndicator = Number(currentTarget.getAttribute("data-id-indicator"));
  //   // console.log(idIndicator);
  //   const dataIndicator = indicatorList.find(indicator => indicator.id === idIndicator);
  //   setSelectedIndicator(dataIndicator);

  //   console.log("Datos del indicador seleccionado: ", dataIndicator)
    
  //   setSeeGraphics(true);
  // };

  return (
    <div className={styles.boxStatistics}>
      <div className={styles.boxTitle}>
        <h1 className={styles.title}>ESTADÍSTICAS</h1>
      </div>

      <CoursesPanel showIndicators={showIndicators} />

      {/* Estos 2 no se mostrarán porque comenté setSeeIndicators */}
      {/* {
        seeIndicators && (
          <IndicatorPanel dataCourse={selectedCourse} showGraphics={showGraphics} />
        )
      }

      {
        seeGraphics && (
          <GraphicsPanel dataIndicator={selectedIndicator} dataCourse={selectedCourse} />
        )
      } */}



      {/* Mostrando todos los gráficos con solo elegir un curso */}
      {/* {
        seeGraphics && (
          <>
            <div>Curso tal tal</div>
            {
              indicatorList.map(indicator => <GraphicsPanel key={indicator.id} dataIndicator={indicator} dataCourse={selectedCourse} />)
            }
          </>
        )
      } */}
    </div>
  );
};
