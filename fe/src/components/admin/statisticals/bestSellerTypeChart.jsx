import React, { Fragment } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import "./style.css";

const BestSellerTypeChart = () => {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    return(
        <Fragment>
            <Doughnut
                data={data}
            />
        </Fragment>
    )
}

export default BestSellerTypeChart;