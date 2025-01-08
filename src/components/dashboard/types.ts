export interface StatusUpdate {
  status: JobStatus;
  timestamp: string;
  notes?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string | number;
  description: string;
  url: string;
  platform: string;
  status: JobStatus;
  statusHistory: StatusUpdate[];
  createdAt: string;
  updatedAt: string;
  techArtisticScore?: number;
  cvMatchScore?: number;
  categories: TechArtisticCategory[];
  keywordMatches: string[];
  requiredPairs: number;
  isRemote?: boolean;
  employmentType?: 'full-time' | 'contract' | 'self-employed';
}

export type TechArtisticCategory = 
  | 'digital_art'
  | 'ai_creative_tools'
  | 'blockchain_creative'
  | 'digital_assistance'
  | 'tech_innovation';

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
  categories?: TechArtisticCategory[];
  minTechArtisticScore?: number;
  minCvMatchScore?: number;
  employmentTypes?: ('full-time' | 'contract' | 'self-employed')[];
  requiredCategories?: number;
}

export type SortOption = 'cv_match' | 'tech_artistic' | 'salary' | '';

export interface JobListProps {
  jobs: Job[];
  filter: JobFilter;
  onFilterChange: (filter: JobFilter) => void;
  onStatusUpdate?: (jobId: string, newStatus: JobStatus, notes?: string) => void;
  onSort?: (sortBy: SortOption, sortedJobs: Job[]) => void;
  sortBy?: SortOption;
}

export interface AnalyticsData {
  applicationsByStatus: Record<JobStatus, number>;
  applicationsByPlatform: Record<string, number>;
  averageSalary: number;
  responseRate: number;
  interviewRate: number;
  offerRate: number;
}
