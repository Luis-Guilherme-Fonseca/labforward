import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';

function RawDataChart({ data }) {
  if (Array.isArray(data) && data.length > 0) {
    return (
      <ResponsiveContainer width='80%' height='60%'>
        <LineChart data={data}>
          <XAxis/>
          <YAxis/>
          <Line dataKey="raw" fill="#8884d8"/>
        </LineChart>
      </ResponsiveContainer>
    )
  } else {
    return <h3>Please Select an experiment</h3>
  }
}

export default RawDataChart