import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getTransactions } from "../../../../app/transactionSlice";
import { useSelector } from "react-redux";

const COLORS = ["#00C49F", "#0088FE"];

export default function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={90}
          cy={100}
          innerRadius={60}
          outerRadius={90}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
