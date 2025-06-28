import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Search, Filter, Plus, Video, Tag, Clock, Users, Wrench, Package } from 'lucide-react';
import { Video as VideoType, UserRole } from '../../interfaces';
import { formatDuration, truncateText } from '../../utils/helpers';

// Mock data
const mockVideos: VideoType[] = [
  {
    id: '1',
    title: 'Shimano Derailleur Adjustment',
    description: 'Complete guide to adjusting Shimano derailleurs for optimal shifting performance.',
    videoUrl: 'https://example.com/video1.mp4',
    thumbnailUrl: 'https://example.com/thumb1.jpg',
    duration: 1250, // 20:50 in seconds
    tags: ['derailleur', 'shimano', 'adjustment'],
    tools: ['Hex wrench set', 'Cable cutter', 'Derailleur alignment tool'],
    materials: ['Cable housing', 'Derailleur cable', 'Lubricant'],
    assignedRoles: [UserRole.MECHANIC, UserRole.TRAINEE],
    createdBy: '1',
    createdAt: new Date('2024-01-10'),
    viewCount: 67,
    isPublic: true
  },
  {
    id: '2',
    title: 'Hydraulic Brake Bleeding',
    description: 'Step-by-step procedure for bleeding hydraulic disc brakes.',
    videoUrl: 'https://example.com/video2.mp4',
    thumbnailUrl: 'https://example.com/thumb2.jpg',
    duration: 1800, // 30:00 in seconds
    tags: ['brakes', 'bleeding', 'hydraulic'],
    tools: ['Bleed kit', 'Syringe', 'Torx wrench'],
    materials: ['Brake fluid', 'Bleed block', 'Paper towels'],
    assignedRoles: [UserRole.MECHANIC, UserRole.TRAINEE],
    createdBy: '2',
    createdAt: new Date('2024-01-05'),
    viewCount: 45,
    isPublic: true
  },
  {
    id: '3',
    title: 'Wheel Truing Basics',
    description: 'Learn the fundamentals of wheel truing and spoke adjustment.',
    videoUrl: 'https://example.com/video3.mp4',
    thumbnailUrl: 'https://example.com/thumb3.jpg',
    duration: 2100, // 35:00 in seconds
    tags: ['wheels', 'truing', 'spokes'],
    tools: ['Truing stand', 'Spoke wrench', 'Tension meter'],
    materials: ['Spokes', 'Nipples', 'Rim tape'],
    assignedRoles: [UserRole.MECHANIC],
    createdBy: '1',
    createdAt: new Date('2024-01-15'),
    viewCount: 23,
    isPublic: false
  }
];

const VideoTrainingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [videos] = useState<VideoType[]>(mockVideos);

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRole = selectedRole === 'all' || video.assignedRoles.includes(selectedRole as UserRole);
    
    return matchesSearch && matchesRole;
  });

  const roleOptions = [
    { value: 'all', label: 'All Roles' },
    { value: UserRole.MECHANIC, label: 'Mechanics' },
    { value: UserRole.TRAINEE, label: 'Trainees' },
    { value: UserRole.MANAGER, label: 'Managers' }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tool Park</h1>
            <p className="text-gray-600">Video training library for bicycle repair procedures</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Upload Video
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Role Filters */}
            <div className="flex flex-wrap gap-2">
              {roleOptions.map((role) => (
                <button
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedRole === role.value
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} hover className="flex flex-col">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {formatDuration(video.duration)}
                </div>
                {!video.isPublic && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    Private
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {truncateText(video.description, 100)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {video.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tools and Materials */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Wrench className="w-4 h-4 mr-2" />
                    <span className="font-medium">Tools:</span>
                    <span className="ml-1">{video.tools.length}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Package className="w-4 h-4 mr-2" />
                    <span className="font-medium">Materials:</span>
                    <span className="ml-1">{video.materials.length}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {video.assignedRoles.length} roles
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {video.viewCount} views
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <Card>
            <div className="text-center py-12">
              <Video className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No videos found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default VideoTrainingPage; 