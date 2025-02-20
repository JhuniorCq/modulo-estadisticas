
import { BarGraph } from "./BarGraph/BarGraph";
import { CircularGraphic } from "./CircularGraphic/CircularGraphic";
import styles from "./Graphics.module.css";
import { LineGraph } from "./LineGraph/LineGraph";

export const Graphics = ({ studentData, dataIndicator }) => {
    const { id } = dataIndicator;
    const studentSurames = studentData.map(student => student.apellidos);

    switch(id) {
        case 1: {
            const dataX = ["Prácticas", "Ex. Parcial", "Participación", "Ex. Final", "Proyecto"]; // X
            const dataY = [15, 12, 9, 16, 15]; // Y
            const graphConfiguration = {
                graphicData: {
                    label: "Notas por Estudiantes",
                    data: dataY,
                    fill: true,
                    borderColor: "#044D76",
                    pointBackgroundColor: "#424C6F"
                }, 
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            min: 0,
                            max: 20
                        }
                    }
                }
            }

            return (
                <LineGraph graphConfiguration={graphConfiguration} dataX={dataX} dataY={dataY} />
            )
        }
        case 2: {
            const dataX = ["Prácticas", "Ex. Parcial", "Participación", "Ex. Final", "Proyecto"];
            const dataY = [15, 12, 9, 16, 15];
            
            const graphConfiguration = {
                graphicData: {
                    label: "Mis notas",
                    data: dataY,
                    fill: true,
                    borderColor: "#044D76",
                    backgroundColor: "rgba(255, 0, 0, .4)"
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            min: 0,
                            max: 20
                        }
                    }
                }
            }

            return (
                <BarGraph graphConfiguration={graphConfiguration} dataX={dataX} dataY={dataY} />
            )
        }
        case 3: {
            const dataX = studentSurames;
            const dataY = [11, 17, 18, 7, 14, 11, 1];
            
            const graphConfiguration = {
                graphicData: {
                    label: "Notas por Evaluación",
                    data: dataY,
                    fill: true,
                    borderColor: "#044D76",
                    backgroundColor: "rgba(255, 255, 0, .4)",
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            min: 0,
                            max: 20
                        }
                    }
                }
            }

            return (
                <BarGraph graphConfiguration={graphConfiguration} dataX={dataX} dataY={dataY} />
            )
        }
        case 4: {
            const options = {
                responsive: true,
                maintainAspectRatio: false
            };
            
            const data = {
                labels: ["Aprobados: 79%", "Desaprobados: 21%"],
                datasets: [
                    {
                        label: "Popularidad en Navidad",
                        data: [79, 21],
                        backgroundColor: [
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 99, 132, 0.2)",
                        ],
                        borderColor: [
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 99, 132, 1)",
                        ],
                        borderWidth: 1
                    }
                ]
            }

            return (
                <CircularGraphic options={options} data={data} />
            )
        }
        default:
            return <div>GRÁFICO INEXISTENTE</div>
    }
};