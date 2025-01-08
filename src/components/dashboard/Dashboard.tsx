import React from 'react';
import { motion } from 'framer-motion';
import JobList from './JobList';
import DocumentManager from './DocumentManager';
import ApplicationTracker from './ApplicationTracker';
import Analytics from './Analytics';
import NotificationCenter from './NotificationCenter';
import { Job, Document, JobFilter, AnalyticsData } from './types';

const Dashboard: React.FC = () => {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [documents, setDocuments] = React.useState<Document[]>([]);
  const [filter, setFilter] = React.useState<JobFilter>({
    keywords: [],
    remote: true,
    minSalary: 100000
  });
  const [analytics, setAnalytics] = React.useState<AnalyticsData | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="md:col-span-8 space-y-6">
          <JobList jobs={jobs} filter={filter} onFilterChange={setFilter} />
          <ApplicationTracker jobs={jobs} onStatusUpdate={(id, status) => {
            setJobs(jobs.map(job => 
              job.id === id ? { ...job, status } : job
            ));
          }} />
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 space-y-6">
          <NotificationCenter />
          <DocumentManager 
            documents={documents}
            onUpload={(doc) => setDocuments([...documents, doc])}
            onDelete={(id) => setDocuments(documents.filter(d => d.id !== id))}
          />
          <Analytics data={analytics} />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
