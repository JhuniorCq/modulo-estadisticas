import { Select } from "../Select/Select";
import { BarGraph } from "./BarGraph/BarGraph";
import styles from "./Graphics.module.css";
import { LineGraph } from "./LineGraph/LineGraph";

export const Graphics = ({ dataIndicator, necessaryInformation }) => {
    const { id } = dataIndicator;
    switch(id) {
        case 1:
            return (
                <LineGraph />
            )
        case 2:
            return (
                <BarGraph />
            )
        case 3:
            return <div>MOSTRANDO GRÁFICO N° {id}</div>
        case 4:
            return <div>MOSTRANDO GRÁFICO N° {id}</div>
        default:
            return <div>GRÁFICO INEXISTENTE</div>
    }
};