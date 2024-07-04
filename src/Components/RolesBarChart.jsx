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
  { name: "Admin", active: 96, inactive: 16 },
  { name: "Configurator", active: 62, inactive: 11 },
  { name: "User", active: 25, inactive: 10 },
];

const RolesBarChart = () => (
  <BarChart
    className="roles-bar-chart"
    layout="vertical"
    width={700}
    height={290}
    data={data}
    margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" />
    <YAxis type="category" dataKey="name" />
    <Tooltip />
    <Legend />
    <Bar dataKey="active" fill="#FFD700" barSize={30} stackId="a" />
    <Bar dataKey="inactive" fill="#ffee4d" barSize={30} stackId="a" />
  </BarChart>
);

export default RolesBarChart;
