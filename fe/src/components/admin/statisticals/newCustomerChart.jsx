import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import "./style.css";

const NewCustomerChart = () => {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow',
          'Red',
          'Blue',
          'Yellow',
          'Red',
          'Blue',
          'Yellow',
          'Red',
          'Blue',
          'Yellow',
          'Red',
          'Blue',
          'Yellow',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100,300, 50, 100,300, 50, 100,300, 50, 100,300, 50, 100,],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        },
        {
            label: 'My Second',
            data: [325, 250, 120],
            backgroundColor: [
              'rgb(25, 99, 132)',
              'rgb(5, 162, 235)',
              'rgb(255, 20, 86)'
            ],
            hoverOffset: 4
          }]
      };
    return(
        <Fragment>
            <Line
                data={data}
            />
        </Fragment>
    )
}

export default NewCustomerChart;