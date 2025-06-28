import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Search, Filter, Plus, BookOpen, Tag, Calendar, Eye } from 'lucide-react';
import { Article, Category } from '../../interfaces';
import { formatDate, truncateText } from '../../utils/helpers';

// Mock data - in a real app, this would come from an API
const mockArticles: Article[] = [
  {
    id: '1',
    title: 'How to Service a Shimano Derailleur',
    content: 'Complete guide to servicing Shimano derailleurs...',
    excerpt: 'Learn the step-by-step process for maintaining and adjusting Shimano derailleurs for optimal performance.',
    category: 'Maintenance',
    tags: ['derailleur', 'shimano', 'maintenance'],
    isPublic: true,
    authorId: '1',
    author: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'mechanic' as any,
      isActive: true,
      createdAt: new Date()
    },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    viewCount: 45,
    slug: 'how-to-service-shimano-derailleur'
  },
  {
    id: '2',
    title: 'Brake Bleeding Procedure',
    content: 'Step-by-step guide to bleeding hydraulic brakes...',
    excerpt: 'Master the art of bleeding hydraulic brakes to ensure optimal stopping power and safety.',
    category: 'Brakes',
    tags: ['brakes', 'bleeding', 'hydraulic'],
    isPublic: true,
    authorId: '2',
    author: {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'manager' as any,
      isActive: true,
      createdAt: new Date()
    },
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-12'),
    viewCount: 32,
    slug: 'brake-bleeding-procedure'
  }
];

const mockCategories: Category[] = [
  { id: '1', name: 'Maintenance', description: 'General maintenance procedures', color: '#3B82F6', articleCount: 15 },
  { id: '2', name: 'Brakes', description: 'Brake systems and procedures', color: '#EF4444', articleCount: 8 },
  { id: '3', name: 'Wheels', description: 'Wheel building and maintenance', color: '#10B981', articleCount: 12 },
  { id: '4', name: 'Electronics', description: 'E-bike and electronic systems', color: '#8B5CF6', articleCount: 6 }
];

const KnowledgeBasePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [articles] = useState<Article[]>(mockArticles);
  const [categories] = useState<Category[]>(mockCategories);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
            <p className="text-gray-600">Find articles, guides, and procedures for bicycle repair</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Article
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
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.articleCount})
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} hover className="flex flex-col">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {article.category}
                  </span>
                  {!article.isPublic && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Private
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {truncateText(article.excerpt || '', 120)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{article.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(article.createdAt)}
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {article.viewCount}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <Card>
            <div className="text-center py-12">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No articles found</h3>
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

export default KnowledgeBasePage; 