import styles from "./Select.module.css";

const FILTER_TYPES = {
    students: "students",
    evaluations: "evaluations"
}

const assignTagAndFilter = (idIndicator) => {
    switch(idIndicator) {
        case 1: {

            return {
                label: "Filtro por estudiante: ",
                filterType: FILTER_TYPES.students
            };
        }
        case 3: {

            return {
                label: "Filtro por evaluación: ",
                filterType: FILTER_TYPES.evaluations
            };
        }
        case 4: {

            return {
                label: "Filtro por evaluación: ",
                filterType: FILTER_TYPES.evaluations
            };
        }
        case 5: {

            return {
                label: "Filtrado 5: ",
                filterType: FILTER_TYPES.evaluations
            };
        }
    }
};

const getInformation = (filterType) => {
    switch(filterType) {
        case FILTER_TYPES.students: {
            const dataOptions = [
                {
                    id: 1,
                    name: "Pepe"
                },
                {
                    id: 2,
                    name: "Tito"
                },
                {
                    id: 3,
                    name: "Charo"
                },
                {
                    id: 4,
                    name: "Don Gil"
                },
            ]
            return dataOptions;
        }
        case FILTER_TYPES.evaluations: {
            const dataOptions = [
                {
                    id: 1,
                    name: "Prácticas"
                },
                {
                    id: 2,
                    name: "Examen Parcial"
                },
                {
                    id: 3,
                    name: "Participación"
                },
                {
                    id: 4,
                    name: "Examen Final"
                },
                {
                    id: 5,
                    name: "Proyecto"
                },
            ]
            return dataOptions;
        }
    }
};


export const Select = ({ idIndicator }) => {

    // Acá puedo hacer un llamado a una API o un CONTEXTO, para obtener un ARRAY DE DATOS, y en base a esos DATOS es el contenido que se colocará en los OPTIONS

    // En base al ID INDICATOR voy a asignarle un LABEL y un FILTER TYPE
    const { label, filterType } = assignTagAndFilter(idIndicator);
    const dataOptions = getInformation(filterType);
    
    return (
        <>
            <label htmlFor="">{label}</label>
            <select name="" id="">
                {
                    dataOptions && dataOptions.map(option => (
                        <option value={option.id}>{option.name}</option>
                    ))
                }
            </select>
        </>
    );
};