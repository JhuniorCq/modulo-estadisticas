import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";
import styles from "./LineGraph.module.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const LineGraph = ({ graphConfiguration, dataX, dataY }) => {
    const { graphicData, options } = graphConfiguration;
    const data = useMemo(() => {
        return {
            datasets: [
                graphicData,
            ],
            labels: dataX
        }
    }, [dataY]);

    const sumNotes = dataY.reduce((accumulator, elementArray) => accumulator + elementArray, 0);
    const gradeAverage = sumNotes / dataY.length;

    return (
        <>
            <Line data={data} options={options} />
            <div>
                <p>Promedio del estudiante: <span className={gradeAverage <= 10 ? styles.colorTextRed: styles.colorTextGreen}>{gradeAverage}</span></p>
            </div>
        </>
    );
};