import styles from "./Select.module.css";

const FILTER_TYPES = {
  students: "students",
  evaluations: "evaluations",
};

export const Select = ({ idIndicator, studentData }) => {

  const assignTagAndFilter = (idIndicator) => {
    switch (idIndicator) {
      case 1: {
        return {
          label: "Filtro por estudiante: ",
          filterType: FILTER_TYPES.students,
        };
      }
      case 3: {
        return {
          label: "Filtro por evaluación: ",
          filterType: FILTER_TYPES.evaluations,
        };
      }
      case 4: {
        return {
          label: "Filtro por evaluación: ",
          filterType: FILTER_TYPES.evaluations,
        };
      }
      case 5: {
        return {
          label: "Filtrado 5: ",
          filterType: FILTER_TYPES.evaluations,
        };
      }
    }
  };

  const getInformation = (filterType) => {
    switch (filterType) {
      case FILTER_TYPES.students: {
        return studentData;
      }
      case FILTER_TYPES.evaluations: {
        const dataOptions = [
          {
            id: 1,
            nombres: "Prácticas",
          },
          {
            id: 2,
            nombres: "Examen Parcial",
          },
          {
            id: 3,
            nombres: "Participación",
          },
          {
            id: 4,
            nombres: "Examen Final",
          },
          {
            id: 5,
            nombres: "Proyecto",
          },
        ];
        return dataOptions;
      }
    }
  };

  const { label, filterType } = assignTagAndFilter(idIndicator);
  const dataOptions = getInformation(filterType);

  return (
    <>
      <label htmlFor="">{label}</label>
      <select name="" id="">
        {dataOptions &&
          dataOptions.map((option, index) => (
            <option key={index} className={styles.option} value={option.id}>{filterType === FILTER_TYPES.students? `${option.nombres} ${option.apellidos}`: option.nombres}</option>
          ))}
      </select>
    </>
  );
};
