import React from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Link from "next/link";
import { 
  BookOpen, 
  Video, 
  Users, 
  Building, 
  TrendingUp,
  Clock,
  Activity,
  ArrowRight,
  FileText,
  Play,
  UserCheck,
  Settings
} from "lucide-react";
import { UserRole } from "../interfaces";

const DashboardPage = () => {
  // Mock statistics
  const stats = {
    totalArticles: 24,
    totalVideos: 18,
    totalUsers: 8,
    totalPositions: 6,
    recentActivity: 12,
    pendingTasks: 3
  };

  const recentActivities = [
    {
      id: '1',
      type: 'article',
      title: 'New article published: "Advanced Wheel Truing"',
      user: 'John Doe',
      time: '2 hours ago',
      icon: <FileText className="w-4 h-4" />
    },
    {
      id: '2',
      type: 'video',
      title: 'Video uploaded: "Hydraulic Brake Service"',
      user: 'Jane Smith',
      time: '4 hours ago',
      icon: <Play className="w-4 h-4" />
    },
    {
      id: '3',
      type: 'user',
      title: 'New user registered: Mike Johnson',
      user: 'Admin',
      time: '1 day ago',
      icon: <UserCheck className="w-4 h-4" />
    }
  ];

  const quickActions = [
    {
      title: 'Knowledge Base',
      description: 'Browse articles and guides',
      icon: <BookOpen className="w-6 h-6" />,
      href: '/knowledge-base',
      color: 'bg-blue-500',
      count: stats.totalArticles
    },
    {
      title: 'Tool Park',
      description: 'Video training library',
      icon: <Video className="w-6 h-6" />,
      href: '/video-training',
      color: 'bg-green-500',
      count: stats.totalVideos
    },
    {
      title: 'Company Structure',
      description: 'Organizational hierarchy',
      icon: <Building className="w-6 h-6" />,
      href: '/company-hierarchy',
      color: 'bg-purple-500',
      count: stats.totalPositions
    },
    {
      title: 'User Management',
      description: 'Manage team members',
      icon: <Users className="w-6 h-6" />,
      href: '/user-management',
      color: 'bg-orange-500',
      count: stats.totalUsers
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, John!</h1>
              <p className="text-indigo-100 mt-1">
                Here's what's happening with your bicycle repair shop today.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-indigo-100 text-sm">Current Role</p>
                <p className="font-semibold">Senior Mechanic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Articles</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalArticles}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Video className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Videos</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalVideos}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Team Members</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Recent Activity</p>
                <p className="text-2xl font-bold text-gray-900">{stats.recentActivity}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => (
              <Link key={action.title} href={action.href}>
                <Card hover className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center text-white`}>
                        {action.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-500">{action.count}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity and Pending Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">by {activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Pending Tasks */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Pending Tasks</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Review new training video</p>
                  <p className="text-xs text-gray-500">Due in 2 days</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Update brake service guide</p>
                  <p className="text-xs text-gray-500">Due in 1 week</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <UserCheck className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Onboard new trainee</p>
                  <p className="text-xs text-gray-500">Due in 3 days</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
              <p className="text-sm text-gray-600">All systems operational</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Knowledge Base</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Video Platform</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">User Management</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default DashboardPage;
