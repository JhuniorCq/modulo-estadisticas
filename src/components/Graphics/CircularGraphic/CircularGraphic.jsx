import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CircularGraphic = ({ options, data }) => {
    return (
        <Pie data={data} options={options} />
    );
};