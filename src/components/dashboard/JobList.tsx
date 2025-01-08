import React from 'react';
import { motion } from 'framer-motion';
import { Job, JobFilter } from './types';

interface JobListProps {
  jobs: Job[];
  filter: JobFilter;
  onFilterChange: (filter: JobFilter) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, filter, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Job Opportunities</h2>
      
      {/* Filter Section */}
      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Search keywords..."
          className="w-full px-4 py-2 border rounded"
          onChange={(e) => onFilterChange({
            ...filter,
            keywords: e.target.value.split(' ').filter(Boolean)
          })}
        />
        
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filter.remote}
              onChange={(e) => onFilterChange({
                ...filter,
                remote: e.target.checked
              })}
              className="mr-2"
            />
            Remote Only
          </label>
          
          <input
            type="number"
            placeholder="Min Salary (£)"
            value={filter.minSalary}
            onChange={(e) => onFilterChange({
              ...filter,
              minSalary: parseInt(e.target.value)
            })}
            className="px-4 py-2 border rounded"
          />
        </div>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <span className="text-lg font-medium">£{job.salary}</span>
            </div>
            
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
              <span>{job.location}</span>
              <span>{job.platform}</span>
              <span className="capitalize">{job.status}</span>
            </div>

            {job.techArtisticScore && (
              <div className="mt-2 text-sm">
                <span className="font-medium">Tech-Artistic Score: </span>
                <span className="text-blue-600">{job.techArtisticScore}</span>
              </div>
            )}

            <div className="mt-4">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Job
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
