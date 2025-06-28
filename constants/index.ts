// Application Constants
export const APP_NAME = 'My Multicycle';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Internal platform for bicycle repair shop management';

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    REFRESH: '/api/auth/refresh',
  },
  ARTICLES: {
    LIST: '/api/articles',
    CREATE: '/api/articles',
    UPDATE: '/api/articles/:id',
    DELETE: '/api/articles/:id',
    SEARCH: '/api/articles/search',
  },
  VIDEOS: {
    LIST: '/api/videos',
    CREATE: '/api/videos',
    UPDATE: '/api/videos/:id',
    DELETE: '/api/videos/:id',
    UPLOAD: '/api/videos/upload',
  },
  USERS: {
    LIST: '/api/users',
    CREATE: '/api/users',
    UPDATE: '/api/users/:id',
    DELETE: '/api/users/:id',
    PROFILE: '/api/users/profile',
  },
  POSITIONS: {
    LIST: '/api/positions',
    CREATE: '/api/positions',
    UPDATE: '/api/positions/:id',
    DELETE: '/api/positions/:id',
  },
  ACTIVITY: {
    LIST: '/api/activity',
    LOG: '/api/activity/log',
  },
} as const;

// Navigation Routes
export const ROUTES = {
  DASHBOARD: '/',
  KNOWLEDGE_BASE: '/knowledge-base',
  VIDEO_TRAINING: '/video-training',
  COMPANY_HIERARCHY: '/company-hierarchy',
  USER_MANAGEMENT: '/user-management',
  SETTINGS: '/settings',
  PROFILE: '/profile',
} as const;

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  MECHANIC: 'mechanic',
  TRAINEE: 'trainee',
  VIEWER: 'viewer',
} as const;

// Article Categories
export const ARTICLE_CATEGORIES = [
  'Maintenance',
  'Repair',
  'Assembly',
  'Diagnostics',
  'Safety',
  'Tools',
  'Electronics',
  'Wheels',
  'Brakes',
  'Drivetrain',
] as const;

// Video Categories
export const VIDEO_CATEGORIES = [
  'Maintenance',
  'Repair',
  'Assembly',
  'Training',
  'Safety',
  'Tools',
  'Electronics',
  'Wheels',
  'Brakes',
  'Drivetrain',
] as const;

// Department Types
export const DEPARTMENTS = [
  'Management',
  'Service',
  'Sales',
  'Parts',
  'Training',
  'Quality Control',
] as const;

// Permission Resources
export const PERMISSION_RESOURCES = {
  ARTICLES: 'articles',
  VIDEOS: 'videos',
  USERS: 'users',
  POSITIONS: 'positions',
  SETTINGS: 'settings',
  ACTIVITY: 'activity',
} as const;

// Permission Actions
export const PERMISSION_ACTIONS = {
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 100 * 1024 * 1024, // 100MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_VIDEO_TYPES: ['video/mp4', 'video/webm', 'video/ogg'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'text/plain', 'application/msword'],
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [5, 10, 20, 50],
  MAX_PAGE_SIZE: 100,
} as const;

// Search
export const SEARCH = {
  MIN_QUERY_LENGTH: 2,
  MAX_RESULTS: 50,
  DEBOUNCE_DELAY: 300,
} as const;

// Activity Types
export const ACTIVITY_TYPES = {
  ARTICLE_VIEW: 'article_view',
  ARTICLE_CREATE: 'article_create',
  ARTICLE_UPDATE: 'article_update',
  ARTICLE_DELETE: 'article_delete',
  VIDEO_VIEW: 'video_view',
  VIDEO_CREATE: 'video_create',
  VIDEO_UPDATE: 'video_update',
  VIDEO_DELETE: 'video_delete',
  USER_LOGIN: 'user_login',
  USER_CREATE: 'user_create',
  USER_UPDATE: 'user_update',
  USER_DELETE: 'user_delete',
  POSITION_CREATE: 'position_create',
  POSITION_UPDATE: 'position_update',
  POSITION_DELETE: 'position_delete',
} as const;

// UI Constants
export const UI = {
  SIDEBAR_WIDTH: 256,
  HEADER_HEIGHT: 64,
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT: 1280,
  ANIMATION_DURATION: 200,
  TOAST_DURATION: 5000,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  LANGUAGE: 'language',
  SIDEBAR_COLLAPSED: 'sidebar_collapsed',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied. You don\'t have permission to view this resource.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'An unexpected error occurred. Please try again later.',
  FILE_TOO_LARGE: 'File size exceeds the maximum allowed limit.',
  INVALID_FILE_TYPE: 'File type is not supported.',
  REQUIRED_FIELD: 'This field is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters long.',
  PASSWORDS_DONT_MATCH: 'Passwords do not match.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  ARTICLE_CREATED: 'Article created successfully.',
  ARTICLE_UPDATED: 'Article updated successfully.',
  ARTICLE_DELETED: 'Article deleted successfully.',
  VIDEO_CREATED: 'Video created successfully.',
  VIDEO_UPDATED: 'Video updated successfully.',
  VIDEO_DELETED: 'Video deleted successfully.',
  USER_CREATED: 'User created successfully.',
  USER_UPDATED: 'User updated successfully.',
  USER_DELETED: 'User deleted successfully.',
  POSITION_CREATED: 'Position created successfully.',
  POSITION_UPDATED: 'Position updated successfully.',
  POSITION_DELETED: 'Position deleted successfully.',
  SETTINGS_SAVED: 'Settings saved successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',
} as const;

// Default Values
export const DEFAULTS = {
  USER_AVATAR: '/images/default-avatar.png',
  ARTICLE_THUMBNAIL: '/images/default-article.jpg',
  VIDEO_THUMBNAIL: '/images/default-video.jpg',
  PAGE_TITLE: APP_NAME,
  META_DESCRIPTION: APP_DESCRIPTION,
} as const;

// Feature Flags
export const FEATURES = {
  ENABLE_VIDEO_UPLOAD: true,
  ENABLE_REAL_TIME_NOTIFICATIONS: false,
  ENABLE_ADVANCED_SEARCH: true,
  ENABLE_EXPORT_FUNCTIONALITY: false,
  ENABLE_MULTI_LANGUAGE: false,
  ENABLE_DARK_MODE: true,
} as const; 