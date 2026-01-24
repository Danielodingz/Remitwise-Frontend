'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import SummaryCard from '@/components/insights/SummaryCard'
import SpendingSavingChart from '@/components/insights/SpendingSavingChart'
import MonthlyTrendsChart from '@/components/insights/MonthlyTrendsChart'
import CategoryBreakdown from '@/components/insights/CategoryBreakdown'

export default function FinancialInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Financial Insights
            </h1>
          </div>

          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Custom</option>
          </select>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard title="Total Remittances" value="$2,450" />
          <SummaryCard title="Total Saved" value="$820" />
          <SummaryCard title="Bills Paid" value="$1,100" />
          <SummaryCard title="Insurance Premiums" value="$230" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpendingSavingChart />
          <MonthlyTrendsChart />
        </div>

        {/* Category Breakdown */}
        <CategoryBreakdown />
      </main>
    </div>
  )
}
