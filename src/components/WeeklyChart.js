import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['Week1', 'Week2', 'Week3', 'Week4'],
    datasets: [
        {
            labels: "Saved this Week",
            data:[3500.00, 8000.00, 6500.00, 3000.00],
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
        text: "Saved This Week"
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

function WeeklyChart() {
    return (
        <div className="WeeklyChart">
            <Line data={data} legend = {legend} options={options} width={450} height={100} />
        </div>
    );
}

export default WeeklyChart;
