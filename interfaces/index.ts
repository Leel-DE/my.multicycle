// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

// User and Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  lastLogin?: Date;
  isActive: boolean;
}

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  MECHANIC = 'mechanic',
  TRAINEE = 'trainee',
  VIEWER = 'viewer'
}

// Knowledge Base Types
export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  category: string;
  tags: string[];
  isPublic: boolean;
  authorId: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  viewCount: number;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  color: string;
  articleCount: number;
}

// Video Training Types
export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  duration: number;
  tags: string[];
  tools: string[];
  materials: string[];
  assignedRoles: UserRole[];
  createdBy: string;
  createdAt: Date;
  viewCount: number;
  isPublic: boolean;
}

// Company Hierarchy Types
export interface Position {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  level: number;
  department: string;
  managerId?: string;
  manager?: Position;
  directReports: Position[];
  assignedUsers: User[];
  linkedArticles: string[];
  linkedVideos: string[];
  requirements: string[];
  salary?: number;
}

// Activity Log Types
export interface ActivityLog {
  id: string;
  userId: string;
  user: User;
  action: string;
  resourceType: 'article' | 'video' | 'page';
  resourceId: string;
  resourceTitle: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

// Search and Filter Types
export interface SearchFilters {
  query: string;
  categories?: string[];
  tags?: string[];
  authors?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  isPublic?: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface ArticleForm {
  title: string;
  content: string;
  category: string;
  tags: string[];
  isPublic: boolean;
}

export interface VideoForm {
  title: string;
  description: string;
  videoUrl: string;
  tags: string[];
  tools: string[];
  materials: string[];
  assignedRoles: UserRole[];
  isPublic: boolean;
}

// Permission Types
export interface Permission {
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete';
  roles: UserRole[];
}

export interface RolePermissions {
  role: UserRole;
  permissions: Permission[];
}

