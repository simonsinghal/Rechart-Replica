// Components/BarChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "May", Clients: 1 },
  { name: "November", Clients: 1 },
];

const CustomBarChart = () => (
  <div style={{ paddingTop: "17px" }}>
    <BarChart width={300} height={220} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Clients" fill="#ffe600" barSize={85} />
    </BarChart>
  </div>
);

export default CustomBarChart;
