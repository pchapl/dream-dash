import {Chart} from "react-google-charts";
import {useState} from "react";

const data = [['Color', 'Value']];

const options = {
    title: 'Random stuff',
    slices: {0: {color: "violet"}, 1: {color: "purple"}},
    is3D: true
};

export default function MyRandomizedPie() {
    const [rand, setRand] = useState(Math.random());

    return <>
        <button type="button" onClick={() => setRand(Math.random())}>push me</button>
        <Chart
            chartType="PieChart"
            data={[...data, ['Violet', rand], ['Purple', 1 - rand]]}
            options={options}
        />
    </>;
}
