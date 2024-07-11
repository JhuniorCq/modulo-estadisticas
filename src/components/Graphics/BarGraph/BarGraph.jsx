import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    scales
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

// const scores = [15, 12, 9, 16, 15]; // Y
// const evaluations = ["Prácticas", "Ex. Parcial", "Participación", "Ex. Final", "Proyecto"]; // X

// const options = {
//     responsive: true,
//     scales: {
//         y: {
//             min: 0,
//             max: 20
//         }
//     }
// }

// const dataY = [15, 12, 9, 16, 15];
// const dataX = ["Prácticas", "Ex. Parcial", "Participación", "Ex. Final", "Proyecto"];

// const graphConfiguration = {
//     graphicData: {
//         label: "Mis notas",
//         data: dataY,
//         fill: true,
//         borderColor: "#044D76",
//         // backgroundColor0: "rgba(190, 212, 255, .4)",
//         pointBackgroundColor: "#424C6F"
//     },
//     options: {
//         responsive: true,
//         scales: {
//             y: {
//                 min: 0,
//                 max: 20
//             }
//         }
//     }
// }

export const BarGraph = ({ graphConfiguration, dataX, dataY }) => {

    const { graphicData, options } = graphConfiguration;

    const data = useMemo(() => {
        return {
            datasets: [
                graphicData
            ],
            labels: dataX
        }
    }, [dataY]);

    return (
        <>
            <Bar data={data} options={options} />
            <div>
                <p>Alumno con mejor nota: ...</p>
            </div>
        </>
    );
};