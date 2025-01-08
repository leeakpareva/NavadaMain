import React from 'react';
import { motion } from 'framer-motion';
import JobList from './JobList';
import DocumentManager from './DocumentManager';
import ApplicationTracker from './ApplicationTracker';
import Analytics from './Analytics';
import NotificationCenter from './NotificationCenter';
import { Job, Document, JobFilter, AnalyticsData, JobStatus, SortOption } from './types';
import TopMatches from './TopMatches';

const Dashboard: React.FC = () => {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [documents, setDocuments] = React.useState<Document[]>([]);
  const [filter, setFilter] = React.useState<JobFilter>({
    keywords: [],
    remote: true,
    minSalary: 100000
  });
  const [analytics, setAnalytics] = React.useState<AnalyticsData | null>(null);
  const [sortBy, setSortBy] = React.useState<SortOption>('cv_match');
  
  // Initial sort effect
  React.useEffect(() => {
    if (jobs.length > 0) {
      const sortedJobs = [...jobs].sort((a, b) => (b.cvMatchScore || 0) - (a.cvMatchScore || 0));
      setJobs(sortedJobs);
    }
  }, []);

  const handleSort = React.useCallback((sortOption: SortOption, sortedJobs: Job[]) => {
    setSortBy(sortOption);
    setJobs(sortedJobs);
  }, []);

  const handleStatusUpdate = React.useCallback((id: string, status: JobStatus, notes?: string) => {
    setJobs(prevJobs => {
      const updatedJobs = prevJobs.map(job => 
        job.id === id 
          ? { 
              ...job, 
              status,
              statusHistory: [
                ...(job.statusHistory || []),
                { status, timestamp: new Date().toISOString(), notes }
              ]
            } 
          : job
      );

      // Update analytics
      const newAnalytics = {
        applicationsByStatus: updatedJobs.reduce((acc, job) => {
          acc[job.status] = (acc[job.status] || 0) + 1;
          return acc;
        }, {} as Record<JobStatus, number>),
        applicationsByPlatform: updatedJobs.reduce((acc, job) => {
          acc[job.platform] = (acc[job.platform] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        averageSalary: updatedJobs.reduce((sum, job) => {
          const salary = typeof job.salary === 'string' 
            ? parseInt(job.salary.replace(/[^0-9]/g, '')) || 0
            : job.salary || 0;
          return sum + salary;
        }, 0) / updatedJobs.length,
        responseRate: updatedJobs.filter(j => j.status !== 'new').length / updatedJobs.length,
        interviewRate: updatedJobs.filter(j => j.status === 'interview_scheduled').length / updatedJobs.length,
        offerRate: updatedJobs.filter(j => j.status === 'offer_received').length / updatedJobs.length
      };

      setAnalytics(newAnalytics);
      return updatedJobs;
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="md:col-span-8 space-y-6">
          <TopMatches
            jobs={jobs}
            onViewJob={(job) => window.open(job.url, '_blank')}
          />
          <JobList 
            jobs={jobs} 
            filter={filter} 
            onFilterChange={setFilter}
            onStatusUpdate={handleStatusUpdate}
            onSort={handleSort}
            sortBy={sortBy}
          />
          <ApplicationTracker 
            jobs={jobs} 
            onStatusUpdate={handleStatusUpdate}
          />
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
