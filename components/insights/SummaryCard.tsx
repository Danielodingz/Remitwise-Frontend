interface SummaryCardProps {
  title: string
  value: string
}

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  )
}
