import React, { useContext, useState } from "react";
import { MyContext } from "../../store";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const [color, setColor] = useState("#416D19");
  const ctx = useContext(MyContext);
  const data = [
    {
      name: ctx.name,
      uv: 4000,
      salary: ctx.salary,
      amt: 2400,
    },
  ];

  return (
    <ResponsiveContainer width="50%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar
          dataKey="salary"
          fill={
            ctx.salary > 100000
              ? color
              : ctx.salary < 20000
              ? "#D04848"
              : "#6B240C"
          }
          background={{ fill: "#eee" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
