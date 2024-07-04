// Components/LoginsBarChart.js
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
  { name: "May 2024", logins: 26000 },
  { name: "Jun 2024", logins: 15000 },
];

const LoginsBarChart = () => (
  <div style={{ paddingTop: "17px" }}>
    <BarChart width={670} height={290} data={data} margin={{ top: 20, right: 30, left: 50, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="logins" fill="#ffe600" barSize={70} />
    </BarChart>
  </div>
);

export default LoginsBarChart;
