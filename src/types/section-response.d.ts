export interface SectionResponse {
  docs: Section[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: any;
}

interface Link {
  text: string;
  url: string;
}

export interface Section {
  id: string;
  heading: string;
  content: string;
  emoji?: string;
  order?: number;
  links?: Link[];
  createdAt: string;
  updatedAt: string;

  apiKey?: string;
  apiKeyIndex?: string;
  email?: string;
  enableAPIKey?: boolean;
  loginAttempts?: number;
}
