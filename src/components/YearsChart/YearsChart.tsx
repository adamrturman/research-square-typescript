import React from "react";
import { Bar } from "react-chartjs-2";

interface Total {
    year: number;
    total: number;
}

interface Props {
    totals: Total[];
}

interface DataSet {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
}

interface Chart {
    labels : number[];
    datasets: DataSet[];
}

function DataChart(props: Props) {
    const { totals } = props;

    if (totals && totals.length > 0) {
        const years: number[] = totals.map((total: Total) => {
            return total.year;
        });

        const amounts: number[] = totals.map((total: Total) => {
            return total.total;
        });

        const chartData: Chart = {
            labels: [...years],
            datasets: [
                {
                    label: "Total Orders by Year",
                    data: [...amounts],
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                },
            ]
        };

        return (
            <div>
                <Bar data={chartData} />
            </div>
        );
    }

    return null;
}

export default DataChart;