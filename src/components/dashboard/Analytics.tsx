import React from 'react';
import { AnalyticsData } from './types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface AnalyticsProps {
  data: AnalyticsData | null;
}

const Analytics: React.FC<AnalyticsProps> = ({ data }) => {
  if (!data) return null;

  const statusData = Object.entries(data.applicationsByStatus).map(([status, count]) => ({
    name: status.replace('_', ' '),
    value: count
  }));

  const platformData = Object.entries(data.applicationsByPlatform).map(([platform, count]) => ({
    name: platform,
    value: count
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const formatPercentage = (value: number) => `${(value * 100).toFixed(1)}%`;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-medium text-blue-900">Response Rate</h3>
          <p className="text-2xl font-bold text-blue-600">
            {formatPercentage(data.responseRate)}
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="text-sm font-medium text-green-900">Interview Rate</h3>
          <p className="text-2xl font-bold text-green-600">
            {formatPercentage(data.interviewRate)}
          </p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="text-sm font-medium text-yellow-900">Offer Rate</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {formatPercentage(data.offerRate)}
          </p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="text-sm font-medium text-purple-900">Avg. Salary</h3>
          <p className="text-2xl font-bold text-purple-600">
            £{data.averageSalary.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Application Status Distribution */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Application Status Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Platform Distribution */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Applications by Platform</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={platformData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
