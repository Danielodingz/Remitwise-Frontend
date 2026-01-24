'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

const data = [
  { month: 'Jan', remittances: 400, savings: 150, bills: 200 },
  { month: 'Feb', remittances: 600, savings: 220, bills: 280 },
  { month: 'Mar', remittances: 500, savings: 200, bills: 260 },
  { month: 'Apr', remittances: 700, savings: 300, bills: 320 },
  { month: 'May', remittances: 650, savings: 280, bills: 310 },
]

export default function MonthlyTrendsChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Monthly Trends
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="remittances"
              stroke="#2563EB"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="savings"
              stroke="#22C55E"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="bills"
              stroke="#F97316"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
