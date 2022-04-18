import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  lineChartData,
  lineChartOptions,
} from "/Users/7vik/Work/BITS/Sem 6/SE - IS F341/Assignments/jumble/src/Utils/variables/charts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: lineChartData,
      chartOptions: lineChartOptions,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
