import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" aspect={4 / 3}>
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis type="number" domain={[0, "dataMax + 5000"]} />
        <Tooltip />
        <Line
          type="amount"
          name="Transacción de"
          dataKey="amount"
          stroke="#3564FD"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
