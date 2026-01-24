'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const spendingData = [
  { category: 'Food', value: 35 },
  { category: 'Transport', value: 20 },
  { category: 'Utilities', value: 25 },
  { category: 'Others', value: 20 },
]

const savingsData = [
  { category: 'Emergency', value: 40 },
  { category: 'School', value: 30 },
  { category: 'Rent', value: 20 },
  { category: 'Investments', value: 10 },
]

export default function CategoryBreakdown() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Category Breakdown
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Spending */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Spending by Category
          </h3>
          <div className="w-full h-56">
            <ResponsiveContainer>
              <BarChart data={spendingData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#F97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Savings */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Savings by Goal
          </h3>
          <div className="w-full h-56">
            <ResponsiveContainer>
              <BarChart data={savingsData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#22C55E" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  )
}
