import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jul 2023', users: 27 },
  { name: 'Aug 2023', users: 16 },
  { name: 'Sep 2023', users: 37 },
  { name: 'Nov 2023', users: 2 },
  { name: 'Jan 2024', users: 2 },
  { name: 'Mar 2024', users: 9 },
  { name: 'Apr 2024', users: 6 },
  { name: 'May 2024', users: 42 },
  { name: 'Jun 2024', users: 7 },
];

const CustomLineChart = () => (
  <LineChart width={680} height={245} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line 
      type="monotone" 
      dataKey="users" 
      stroke="#ffe600" 
      activeDot={{ r: 10 }} 
      strokeDasharray="7 7" 
      strokeWidth={3}
    />
  </LineChart>
);

export default CustomLineChart;

