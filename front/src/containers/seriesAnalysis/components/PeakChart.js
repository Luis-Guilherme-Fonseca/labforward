import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

function PeakChart({ data }) {
  return (
    <ResponsiveContainer width='80%' height={400}>
      <BarChart barCategoryGap='0' data={data}>
        <XAxis />
        <YAxis ticks={[0, 1]}/>
        <Bar dataKey="peak" fill="#8884d8"/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default PeakChart