import {Chart} from "react-google-charts";

const data = [['Answer', 'Probability'], ['No', 3], ['No, but in blue', 3], ["Yesn't", 5]];

const options = {
    title: 'Do I appreciate this lesson?',
    tooltip: {trigger: "none"},
    slices: {0: {color: "green"}, 1: {color: "blue"}},
    is3D: true,
};

const MyPie = () => <Chart
    chartType="PieChart"
    data={data}
    options={options}
/>;
export default MyPie;
