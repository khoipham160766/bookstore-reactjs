import React, { Fragment} from "react";
import { Bar } from "react-chartjs-2";
import { data } from "./data";
import { Chart } from "chart.js/auto";
import "./style.css";

const InOutChart = () => {
    // const [dataTest, setDataTest] = useState({
    //     labels: data.map((mini)=> mini.year) ,
    //     datasets: [{
    //         label: "User Gained",
    //         data: data.map((mini)=>mini.userGain)
    //     },
    //     {
    //         label: "User Lost",
    //         data: data.map((mini)=>mini.userLost)
    //     },]
    // })
    const dataTest = {
        labels: data.map((mini)=> mini.year) ,
        datasets: [{
            label: "User Gained",
            data: data.map((mini)=>mini.userGain),
            backgroundColor: ["red"]
        },
        {
            label: "User Lost",
            data: data.map((mini)=>mini.userLost),
            backgroundColor: ["yellow"]
        },]
    };
    return(
        <Fragment>
            <Bar
                data={dataTest}
            />
        </Fragment>
    )
}

export default InOutChart;