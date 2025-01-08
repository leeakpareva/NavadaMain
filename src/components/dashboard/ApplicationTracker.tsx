import React from 'react';
import { Job, JobStatus } from './types';

interface ApplicationTrackerProps {
  jobs: Job[];
  onStatusUpdate: (id: string, status: JobStatus) => void;
}

const ApplicationTracker: React.FC<ApplicationTrackerProps> = ({
  jobs,
  onStatusUpdate,
}) => {
  const statusCounts = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {} as Record<JobStatus, number>);

  const statuses: JobStatus[] = [
    'new',
    'reviewing',
    'applied',
    'interview_scheduled',
    'offer_received',
    'rejected'
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Application Tracker</h2>

      {/* Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {statuses.map((status) => (
          <div
            key={status}
            className="p-4 rounded-lg bg-gray-50"
          >
            <h3 className="font-medium capitalize">{status.replace('_', ' ')}</h3>
            <p className="text-2xl font-bold mt-2">
              {statusCounts[status] || 0}
            </p>
          </div>
        ))}
      </div>

      {/* Application List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <select
                value={job.status}
                onChange={(e) => onStatusUpdate(job.id, e.target.value as JobStatus)}
                className="border rounded px-2 py-1"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status.replace('_', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-sm text-gray-500">
              <p>Applied: {new Date(job.createdAt).toLocaleDateString()}</p>
              <p>Last Updated: {new Date(job.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationTracker;
