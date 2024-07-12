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