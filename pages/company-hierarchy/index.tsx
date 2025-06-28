import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ChevronDown, ChevronRight, Users, Building, Plus, User, FileText, Video } from 'lucide-react';
import { Position, User as UserType, UserRole } from '../../interfaces';

// Mock data
const mockUsers: UserType[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: UserRole.MECHANIC,
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: UserRole.MANAGER,
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: UserRole.TRAINEE,
    isActive: true,
    createdAt: new Date()
  }
];

const mockPositions: Position[] = [
  {
    id: '1',
    title: 'Shop Manager',
    description: 'Oversees all shop operations and staff',
    responsibilities: 'Manage daily operations, staff scheduling, customer relations, inventory management',
    level: 1,
    department: 'Management',
    assignedUsers: [mockUsers[1]],
    linkedArticles: ['1', '2'],
    linkedVideos: ['1'],
    requirements: ['5+ years experience', 'Management skills', 'Bicycle repair expertise'],
    directReports: []
  },
  {
    id: '2',
    title: 'Senior Mechanic',
    description: 'Experienced mechanic handling complex repairs',
    responsibilities: 'Complex repairs, training junior mechanics, quality control, customer consultations',
    level: 2,
    department: 'Service',
    managerId: '1',
    assignedUsers: [mockUsers[0]],
    linkedArticles: ['1'],
    linkedVideos: ['1', '2'],
    requirements: ['3+ years experience', 'Advanced repair skills', 'Training ability'],
    directReports: []
  },
  {
    id: '3',
    title: 'Junior Mechanic',
    description: 'Entry-level mechanic learning the trade',
    responsibilities: 'Basic repairs, maintenance, parts installation, customer service',
    level: 3,
    department: 'Service',
    managerId: '2',
    assignedUsers: [mockUsers[2]],
    linkedArticles: ['2'],
    linkedVideos: ['3'],
    requirements: ['1+ year experience', 'Basic repair skills', 'Willingness to learn'],
    directReports: []
  }
];

const CompanyHierarchyPage: React.FC = () => {
  const [expandedPositions, setExpandedPositions] = useState<Set<string>>(new Set(['1']));
  const [positions] = useState<Position[]>(mockPositions);

  const togglePosition = (positionId: string) => {
    const newExpanded = new Set(expandedPositions);
    if (newExpanded.has(positionId)) {
      newExpanded.delete(positionId);
    } else {
      newExpanded.add(positionId);
    }
    setExpandedPositions(newExpanded);
  };

  const getDirectReports = (positionId: string) => {
    return positions.filter(pos => pos.managerId === positionId);
  };

  const renderPosition = (position: Position, depth: number = 0) => {
    const hasReports = getDirectReports(position.id).length > 0;
    const isExpanded = expandedPositions.has(position.id);

    return (
      <div key={position.id} className="space-y-2">
        <Card className="hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3">
            {/* Expand/Collapse button */}
            {hasReports && (
              <button
                onClick={() => togglePosition(position.id)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>
            )}
            {!hasReports && <div className="w-6" />}

            {/* Position icon */}
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-indigo-600" />
            </div>

            {/* Position details */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                  <p className="text-sm text-gray-600">{position.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Level {position.level}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {position.department}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-900 mb-1">Responsibilities:</h4>
                <p className="text-sm text-gray-600">{position.responsibilities}</p>
              </div>

              {/* Assigned Users */}
              {position.assignedUsers.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Assigned Staff:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.assignedUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{user.name}</span>
                        <span className="text-xs text-gray-500">({user.role})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Linked Resources */}
              <div className="mt-3 flex items-center space-x-4">
                {position.linkedArticles.length > 0 && (
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText className="w-4 h-4 mr-1" />
                    {position.linkedArticles.length} articles
                  </div>
                )}
                {position.linkedVideos.length > 0 && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Video className="w-4 h-4 mr-1" />
                    {position.linkedVideos.length} videos
                  </div>
                )}
              </div>

              {/* Requirements */}
              {position.requirements.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {position.requirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Direct Reports */}
        {isExpanded && hasReports && (
          <div className="ml-8 space-y-2">
            {getDirectReports(position.id).map((report) => renderPosition(report, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const topLevelPositions = positions.filter(pos => !pos.managerId);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Company Structure</h1>
            <p className="text-gray-600">Organizational hierarchy and role definitions</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Position
          </Button>
        </div>

        {/* Hierarchy Tree */}
        <div className="space-y-4">
          {topLevelPositions.map((position) => renderPosition(position))}
        </div>

        {/* Empty State */}
        {topLevelPositions.length === 0 && (
          <Card>
            <div className="text-center py-12">
              <Building className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No positions defined</h3>
              <p className="mt-1 text-sm text-gray-500">
                Start by adding the top-level positions in your organization.
              </p>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default CompanyHierarchyPage; 