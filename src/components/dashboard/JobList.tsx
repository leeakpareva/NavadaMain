import React from 'react';
import { motion } from 'framer-motion';
import type { JobStatus, TechArtisticCategory, JobListProps, SortOption } from './types';

const STATUS_OPTIONS: JobStatus[] = [
  'new',
  'reviewing',
  'applied',
  'interview_scheduled',
  'offer_received',
  'rejected'
];

const STATUS_COLORS: Record<JobStatus, string> = {
  new: 'bg-blue-100 text-blue-800',
  reviewing: 'bg-yellow-100 text-yellow-800',
  applied: 'bg-purple-100 text-purple-800',
  interview_scheduled: 'bg-green-100 text-green-800',
  offer_received: 'bg-emerald-100 text-emerald-800',
  rejected: 'bg-red-100 text-red-800'
};

const JobList: React.FC<JobListProps> = ({ jobs, filter, onFilterChange, onStatusUpdate, onSort, sortBy }) => {
  const getStatusColor = (status: JobStatus) => STATUS_COLORS[status] || 'bg-gray-100 text-gray-800';
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
            Remote Only (£100k+)
          </label>
          
          <select
            value={filter.employmentTypes?.[0] || ''}
            onChange={(e) => onFilterChange({
              ...filter,
              employmentTypes: e.target.value ? [e.target.value as 'full-time' | 'contract' | 'self-employed'] : undefined
            })}
            className="px-4 py-2 border rounded"
          >
            <option value="">All Employment Types</option>
            <option value="full-time">Full Time</option>
            <option value="contract">Contract</option>
            <option value="self-employed">Self Employed</option>
          </select>
          
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

        {/* Tech-Artistic Categories */}
        <div className="space-y-2">
          <h3 className="font-medium">Tech-Artistic Focus</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['digital_art', 'ai_creative_tools', 'blockchain_creative', 'digital_assistance', 'tech_innovation'].map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filter.categories?.includes(category as TechArtisticCategory)}
                  onChange={(e) => {
                    const currentCategories = filter.categories || [];
                    const newCategories = e.target.checked
                      ? [...currentCategories, category as TechArtisticCategory]
                      : currentCategories.filter(c => c !== category);
                    onFilterChange({
                      ...filter,
                      categories: newCategories
                    });
                  }}
                  className="rounded"
                />
                <span className="text-sm capitalize">{category.replace(/_/g, ' ')}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="number"
            placeholder="Min Tech-Artistic Score"
            value={filter.minTechArtisticScore}
            onChange={(e) => onFilterChange({
              ...filter,
              minTechArtisticScore: parseInt(e.target.value)
            })}
            className="px-4 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Min CV Match Score"
            value={filter.minCvMatchScore}
            onChange={(e) => onFilterChange({
              ...filter,
              minCvMatchScore: parseInt(e.target.value)
            })}
            className="px-4 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Required Categories"
            value={filter.requiredCategories}
            onChange={(e) => onFilterChange({
              ...filter,
              requiredCategories: parseInt(e.target.value)
            })}
            className="px-4 py-2 border rounded"
          />
        </div>
        
        {/* Sort Options */}
        <div className="mt-4">
          <select
            className="w-full px-4 py-2 border rounded"
            value={sortBy || ''}
            onChange={(e) => {
              const sortOption = e.target.value as SortOption;
              const sortedJobs = [...jobs].sort((a, b) => {
                switch (sortOption) {
                  case 'cv_match':
                    return (b.cvMatchScore || 0) - (a.cvMatchScore || 0);
                  case 'tech_artistic':
                    return (b.techArtisticScore || 0) - (a.techArtisticScore || 0);
                  case 'salary':
                    const getSalary = (s: string | number) => 
                      typeof s === 'number' ? s : parseInt(s.replace(/[^0-9]/g, '')) || 0;
                    return getSalary(b.salary) - getSalary(a.salary);
                  default:
                    return 0;
                }
              });
              if (onSort) {
                onSort(sortOption, sortedJobs);
              }
            }}
          >
            <option value="" disabled={sortBy !== ''}>Sort By...</option>
            <option value="cv_match">CV Match Score</option>
            <option value="tech_artistic">Tech-Artistic Score</option>
            <option value="salary">Salary</option>
          </select>
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
              {job.isRemote && <span className="text-green-600">Remote</span>}
              {job.employmentType && <span className="capitalize">{job.employmentType}</span>}
            </div>

            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-4">
                {job.techArtisticScore && (
                  <div className="text-sm">
                    <span className="font-medium">Tech-Artistic Score: </span>
                    <span className="text-blue-600">{job.techArtisticScore}</span>
                  </div>
                )}
                {job.cvMatchScore && (
                  <div className="text-sm">
                    <span className="font-medium">CV Match: </span>
                    <span className="text-green-600">{job.cvMatchScore}%</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(job.status)}`}>
                  {job.status.replace('_', ' ')}
                </span>
                {onStatusUpdate && (
                  <select
                    className="text-xs border rounded px-2 py-1"
                    value={job.status}
                    onChange={(e) => onStatusUpdate(job.id, e.target.value as JobStatus)}
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option key={status} value={status}>
                        {status.replace('_', ' ')}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              {job.categories && job.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.categories.map(category => (
                    <span
                      key={category}
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 capitalize"
                    >
                      {category.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              )}
              {job.keywordMatches && job.keywordMatches.length > 0 && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Matches: </span>
                  {job.keywordMatches.join(', ')}
                </div>
              )}
            </div>

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
