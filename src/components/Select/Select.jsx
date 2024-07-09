import styles from "./Select.module.css";

const assignTagAndFilter = (idIndicator) => {
    switch(idIndicator) {
        case 1: {

            return {
                label: "Filtrado por estudiante: ",
                filterType: "students"
            };
        }
        case 3: {

            return {
                label: "Filtrado 3: ",
                filterType: "evaluations"
            };
        }
        case 4: {

            return {
                label: "Filtrado 4: ",
                filterType: "evaluations"
            };
        }
        case 5: {

            return {
                label: "Filtrado 5: ",
                filterType: "evaluations"
            };
        }
    }
};

const getInformation = (filterType) => {
    switch(filterType) {
        case "students": {
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
        case "evaluations": {
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