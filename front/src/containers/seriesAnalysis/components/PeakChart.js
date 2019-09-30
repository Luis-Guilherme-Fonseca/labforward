import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

function PeakChart({ data }) {
  if (Array.isArray(data) && data.length > 0) {
    return (
      <ResponsiveContainer width='80%' height='60%'>
        <BarChart barCategoryGap='0' data={data}>
          <XAxis />
          <YAxis ticks={[0, 1]}/>
          <Bar dataKey="peak" fill="#8884d8"/>
        </BarChart>
      </ResponsiveContainer>
    )
  } else {
    return <h3>Please Select an experiment</h3>
  }
}

export default PeakChart