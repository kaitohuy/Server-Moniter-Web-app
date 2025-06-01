import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function CpuChart({ data }) {
  return (
    <div className="chart-container bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">CPU Usage</h3>
      <LineChart width={300} height={200} data={data} className="rounded-lg">
        <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={2} dot={false} />
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
        <XAxis dataKey="time" stroke="#6B7280" />
        <YAxis stroke="#6B7280" />
        <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', borderRadius: '0.5rem', border: '1px solid #E5E7EB' }} />
      </LineChart>
      <p className="text-sm text-gray-600 mt-2">{data[0]?.time} - {data[data.length - 1]?.time}</p>
    </div>
  );
}