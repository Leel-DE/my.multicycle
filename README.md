# My Multicycle - Internal Platform

A comprehensive modular web-based internal platform for bicycle repair shop management, built with modern best practices.

## 🚀 Features

### Core Modules

#### 1. Knowledge Base Module
- **Searchable Articles**: Find articles by title, content, or tags
- **Rich Text Editor**: TipTap-based editor with formatting options
- **Categories & Tags**: Organize content with categories and tags
- **Public/Private Toggle**: Control article visibility
- **Markdown Support**: Write content in Markdown format

#### 2. Video Training Module ("Tool Park")
- **Video Library**: Upload and manage training videos
- **Custom Video Player**: Advanced controls with playback speed
- **Tools & Materials**: Track required tools and materials per video
- **Role Assignment**: Assign videos to specific user roles
- **Progress Tracking**: Monitor video completion

#### 3. Company Hierarchy Module
- **Organizational Tree**: Visual representation of company structure
- **Position Management**: Define roles, responsibilities, and requirements
- **Linked Resources**: Connect positions to relevant articles and videos
- **User Assignment**: Assign team members to positions

#### 4. User Management Module
- **Role-Based Access Control**: Manage permissions by user role
- **Activity Tracking**: Monitor user engagement and progress
- **Profile Management**: User profiles with activity logs
- **Team Overview**: Comprehensive team management interface

### Technical Features

- **Modern Stack**: React + TypeScript + Tailwind CSS
- **Responsive Design**: Desktop-first with mobile optimization
- **Modular Architecture**: Isolated modules with clear separation
- **Component-Based**: Reusable UI components
- **File-Based Routing**: Next.js routing system

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Next.js** - React framework with file-based routing
- **Tailwind CSS** - Utility-first CSS framework
- **TipTap** - Rich text editor
- **Lucide React** - Icon library
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
my.multicycle/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── VideoPlayer.tsx
│   ├── layout/             # Layout components
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   └── forms/              # Form components
│       └── RichTextEditor.tsx
├── modules/                # Feature modules
│   ├── knowledge-base/
│   ├── video-training/
│   ├── company-hierarchy/
│   └── user-management/
├── pages/                  # Next.js pages
│   ├── index.tsx           # Dashboard
│   ├── knowledge-base/
│   ├── video-training/
│   ├── company-hierarchy/
│   └── user-management/
├── interfaces/             # TypeScript interfaces
├── utils/                  # Utility functions
└── styles/                 # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my.multicycle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#4F46E5)
- **Secondary**: Gray (#6B7280)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Headings**: Inter font family
- **Body**: System font stack
- **Code**: Monospace font

### Components
- **Cards**: Consistent card design with shadows
- **Buttons**: Multiple variants (primary, secondary, outline, ghost, danger)
- **Forms**: Styled form inputs with validation states
- **Navigation**: Responsive sidebar with mobile support

## 🔐 Authentication & Permissions

### User Roles
- **Admin**: Full system access
- **Manager**: Team and content management
- **Mechanic**: Access to knowledge base and videos
- **Trainee**: Limited access to training materials
- **Viewer**: Read-only access

### Permission System
- Role-based access control (RBAC)
- Module-level permissions
- Content visibility controls
- Activity logging

## 📱 Responsive Design

The platform is designed with a mobile-first approach:
- **Desktop**: Full-featured interface with sidebar navigation
- **Tablet**: Adapted layout with collapsible sidebar
- **Mobile**: Stacked layout with hamburger menu

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_APP_NAME=My Multicycle
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing scale
- Component-specific utilities

## 🧪 Testing

### Running Tests
```bash
npm run test
```

### Test Coverage
```bash
npm run test:coverage
```

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Roadmap

### Planned Features
- [ ] Real-time notifications
- [ ] Advanced search with filters
- [ ] Video upload functionality
- [ ] Export/import functionality
- [ ] Advanced analytics dashboard
- [ ] Mobile app companion
- [ ] Integration with external tools
- [ ] Multi-language support

### Performance Improvements
- [ ] Image optimization
- [ ] Code splitting
- [ ] Caching strategies
- [ ] Database optimization

---

Built with ❤️ for bicycle repair shops worldwide
