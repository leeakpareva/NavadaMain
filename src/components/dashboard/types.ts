export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  url: string;
  platform: string;
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
  techArtisticScore?: number;
}

export type JobStatus = 'new' | 'reviewing' | 'applied' | 'interview_scheduled' | 'offer_received' | 'rejected';

export interface Document {
  id: string;
  name: string;
  type: DocumentType;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export type DocumentType = 'resume' | 'portfolio' | 'certification' | 'other';

export interface JobFilter {
  keywords: string[];
  location?: string;
  remote: boolean;
  minSalary?: number;
  platforms?: string[];
  status?: JobStatus[];
}

export interface AnalyticsData {
  applicationsByStatus: Record<JobStatus, number>;
  applicationsByPlatform: Record<string, number>;
  averageSalary: number;
  responseRate: number;
  interviewRate: number;
  offerRate: number;
}
