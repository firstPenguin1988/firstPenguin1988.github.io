import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['1','2','3','4','5','6','7','8','9','10',11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    datasets: [
        {
            labels: "Today's Saving",
            data:[600.00, 790.00, 850.00, 700.00, 400.00, 500.00, 400.00, 600.00, 800.00, 790.00, 650.00, 700.00, 400.00, 500.00, 400.00, 600.00, 490.00, 790.00, 850.00, 700.00, 400.00, 500.00, 400.00, 600.00, 450.00, 790.00, 850.00, 700.00, 400.00, 500.00, 600.00],
            fill: true,
            backgroundColor: 'rgba(242, 245, 250, 1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
        }
    ]
};

const legend = {
    display: false
}

const options = {

    title: {
        display: true,
        text: "Today's Saving"
    },
  
    annotation: {
        annotations: [
            {
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                value: 'Oct',
                borderColor: "red",
                borderWidth: 1
            }
        ]
    }
}

  function DailyChart() {
    return (
        <div className="DailyChart">
            <Line data={data} legend = {legend} options={options} width={350} height={100} />
        </div>
    );
}

export default DailyChart;
