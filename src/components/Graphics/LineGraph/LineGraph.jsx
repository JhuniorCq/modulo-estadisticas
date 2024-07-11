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

const scores = [15, 12, 9, 16, 15]; // Y
const evaluations = ["Prácticas", "Ex. Parcial", "Participación", "Ex. Final", "Proyecto"]; // X

const options = {
    responsive: true,
    scales: {
        y: {
            min: 0,
            max: 20
        }
    }
}

export const LineGraph = () => {

    const data = useMemo(() => {
        // graphConfiguration
        return {
            datasets: [
                {
                    label: "Notas por Estudiantes",
                    data: scores,
                    fill: true,
                    borderColor: "#044D76",
                    // backgroundColor0: "rgba(190, 212, 255, .4)",
                    pointBackgroundColor: "#424C6F"
                }
            ],
            labels: evaluations
        }
    }, [scores]);

    const sumNotes = scores.reduce((accumulator, elementArray) => accumulator + elementArray, 0);
    const gradeAverage = sumNotes / scores.length;

    return (
        <>
            <Line data={data} options={options} />
            <div>
                <p>Promedio del estudiante: <span className={gradeAverage <= 10 ? styles.colorTextRed: styles.colorTextGreen}>{gradeAverage}</span></p>
            </div>
        </>
    );
};