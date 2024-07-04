import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, Label, LabelList } from 'recharts';

const data = [
  { name: 'True', value: 183 },
  { name: 'False', value: 37 },
];

const COLORS = ['#ccb800', '#ffee4d'];

const CustomPieChart = () => {
  // const total = data.reduce((sum, entry) => sum + entry.value, 220); // Calculating the total value

  return (
    <PieChart width={290} height={300}>
      <Pie
        data={data}
        cx={170}
        cy={100}
        innerRadius={70}
        outerRadius={100}
        fill="#ffe600"
        paddingAngle={2}
        // dataKey="value"
        // label={({ name, value }) => `${value}`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          value={`220`}
          position="center"
          className="total-label"
          fill="#ffe600"
          style={{ fontSize: '24px' }}
        />
      </Pie>
      <Tooltip />
      <Legend layout="vertical" align="bottom" verticalAlign="middle" />
    </PieChart>
  );
};

export default CustomPieChart;
