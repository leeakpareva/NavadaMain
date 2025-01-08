import React from 'react';
import { motion } from 'framer-motion';
import { Job } from './types';

interface TopMatchesProps {
  jobs: Job[];
  onViewJob: (job: Job) => void;
}

const TopMatches: React.FC<TopMatchesProps> = ({ jobs, onViewJob }) => {
  // Filter for remote £100k+ positions and sort by CV match score
  const topMatches = React.useMemo(() => {
    return jobs
      .filter(job => 
        job.isRemote && 
        (typeof job.salary === 'number' ? job.salary >= 100000 : 
         parseInt(job.salary.replace(/[^0-9]/g, '')) >= 100000)
      )
      .sort((a, b) => (b.cvMatchScore || 0) - (a.cvMatchScore || 0))
      .slice(0, 5); // Show top 5 matches
  }, [jobs]);

  if (topMatches.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Top CV Matches</h2>
      <div className="space-y-4">
        {topMatches.map(job => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.02 }}
            className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer"
            onClick={() => onViewJob(job)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600 font-medium">
                  {job.cvMatchScore}% Match
                </span>
                {job.employmentType && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {job.employmentType}
                  </span>
                )}
              </div>
            </div>
            
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
              <span>Remote</span>
              <span>•</span>
              <span>£{typeof job.salary === 'number' ? 
                job.salary.toLocaleString() : 
                parseInt(job.salary.replace(/[^0-9]/g, '')).toLocaleString()
              }</span>
            </div>

            {job.techArtisticScore && (
              <div className="mt-2 text-sm">
                <span className="text-gray-600">Tech-Artistic Score: </span>
                <span className="text-blue-600 font-medium">{job.techArtisticScore}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TopMatches;
