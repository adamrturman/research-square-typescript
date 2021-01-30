import React from "react";
import { Bar } from "react-chartjs-2";



function DataChart(props:any) {

    const { totals } = props;
    console.log("totals", totals)

    if(totals && totals.length > 0) {
    const years:any = totals.map((total:any) => {
        return total.year;
    });

    const amounts:any[] = totals.map((total:any) => {
        return total.total;
    });

    const info:object = {
        labels: [...years],
        datasets: [
            {
                label: "Total Purchases by Year",
                data: [...amounts],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
        
    };
    return (
        <div>
            <Bar data={info} />
        </div>
    );
    } 
    return null;
}

export default DataChart;