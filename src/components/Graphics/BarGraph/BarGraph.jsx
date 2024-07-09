import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
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

export const BarGraph = () => {

    const data = useMemo(() => {
        return {
            datasets: [
                {
                    label: "Mis notas",
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

    return (
        <>
            <Bar data={data} options={options} />
            <div>
                <p>Promedio del Curso: ...</p>
            </div>
        </>
    );
};