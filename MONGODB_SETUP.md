# MongoDB Atlas & Admin Panel Setup Guide

This guide walks you through setting up the complete MongoDB Atlas integration and admin panel for the TileTextures application.

## 🚀 Quick Start

### 1. Environment Setup

Copy the environment template:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your credentials:

```env
# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tiletextures?retryWrites=true&w=majority

# NextAuth Secret (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Cloudinary (optional for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Admin credentials
ADMIN_EMAIL=admin@tiletextures.com
ADMIN_PASSWORD=admin123
```

### 2. MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**

   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account
   - Create a new cluster

2. **Get Connection String**

   - In Atlas dashboard, click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Update `MONGODB_URI` in `.env.local`

3. **Configure Network Access**
   - Go to "Network Access" in Atlas
   - Add IP Address: `0.0.0.0/0` (allow from anywhere)
   - Or add your specific IP address

### 3. Cloudinary Setup (Optional)

1. **Create Cloudinary Account**

   - Go to [Cloudinary](https://cloudinary.com/)
   - Create a free account

2. **Get API Credentials**
   - In dashboard, find your cloud name, API key, and API secret
   - Update the Cloudinary variables in `.env.local`

### 4. Seed the Database

Run the seeder script to populate initial data:

```bash
node scripts/seed-database.js
```

This will create:

- 10 sample textures with realistic data
- Admin user account
- Proper database indexes

### 5. Start the Application

```bash
npm run dev
```

## 🎯 Features Included

### ✅ Complete Admin Panel

- **Dashboard**: Statistics and recent textures overview
- **Texture Management**: Full CRUD operations
- **Image Upload**: Cloudinary integration with automatic optimization
- **Authentication**: Secure admin login with NextAuth.js
- **Filtering**: Search, category, and status filters
- **Pagination**: Efficient data loading

### ✅ Database Integration

- **MongoDB Models**: Texture and User schemas
- **API Routes**: RESTful endpoints for all operations
- **Data Validation**: Input validation and error handling
- **Performance**: Indexed queries and optimized pagination

### ✅ Frontend Updates

- **Dynamic Data**: All pages now use database data
- **Loading States**: Proper loading indicators
- **Error Handling**: Graceful error messages
- **Responsive Design**: Works on all devices

## 📱 Admin Panel Access

### Login Information

- **URL**: `http://localhost:3000/admin/login`
- **Email**: `admin@tiletextures.com` (or your custom email)
- **Password**: `admin123` (or your custom password)

### Admin Features

1. **Dashboard**: View statistics and recent activity
2. **Texture Management**: Add, edit, delete textures
3. **Image Upload**: Upload and manage texture images
4. **Categories**: Organize textures by category
5. **Featured/Trending**: Mark textures as featured or trending
6. **Search & Filter**: Find textures quickly

## 🗂️ Project Structure

```
├── app/
│   ├── admin/                 # Admin panel pages
│   │   ├── dashboard/         # Admin dashboard
│   │   ├── textures/          # Texture management
│   │   ├── login/             # Admin login
│   │   └── layout.tsx         # Admin layout with auth
│   ├── api/                   # API routes
│   │   ├── auth/              # NextAuth endpoints
│   │   ├── textures/          # Texture CRUD
│   │   ├── admin/             # Admin-specific APIs
│   │   └── upload/            # Image upload
│   └── texture/[id]/          # Dynamic texture pages
├── components/
│   ├── admin/                 # Admin-specific components
│   └── ui/                    # Reusable UI components
├── hooks/
│   └── useTextures.ts         # Custom hooks for data fetching
├── lib/
│   ├── auth.ts                # NextAuth configuration
│   ├── mongodb.ts             # Database connection
│   └── models/                # Mongoose schemas
├── scripts/
│   └── seed-database.js       # Database seeder
└── types/
    └── next-auth.d.ts         # TypeScript declarations
```

## 🔧 API Endpoints

### Public Endpoints

- `GET /api/textures` - Get textures with filtering
- `GET /api/textures/[id]` - Get single texture

### Admin Endpoints (Authentication Required)

- `POST /api/textures` - Create texture
- `PUT /api/textures/[id]` - Update texture
- `DELETE /api/textures/[id]` - Delete texture (soft delete)
- `GET /api/admin/textures` - Admin texture management
- `POST /api/upload` - Upload image to Cloudinary
- `DELETE /api/upload` - Delete image from Cloudinary

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run database seeder
node scripts/seed-database.js

# Type checking
npm run typecheck

# Format code
npm run format.fix
```

## 🔒 Security Features

- **Authentication**: NextAuth.js with secure sessions
- **Authorization**: Role-based access control
- **Input Validation**: Server-side validation for all inputs
- **Password Hashing**: Bcrypt with salt rounds
- **Environment Variables**: Sensitive data in environment files
- **CORS Protection**: Proper API security headers

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Error**

   - Check MongoDB Atlas connection string
   - Verify network access settings
   - Ensure database password is correct

2. **Admin Login Not Working**

   - Check `NEXTAUTH_SECRET` is set
   - Verify admin credentials in database
   - Clear browser cookies/session

3. **Image Upload Failing**

   - Verify Cloudinary credentials
   - Check file size limits (5MB max)
   - Ensure file is valid image format

4. **Build Errors**
   - Run `npm run typecheck` to check TypeScript
   - Verify all dependencies are installed
   - Check for missing environment variables

### Debug Mode

Enable debug logging by adding to `.env.local`:

```env
NEXTAUTH_DEBUG=true
NODE_ENV=development
```

## 🎯 Next Steps

1. **Customize Admin Panel**: Add more features as needed
2. **Add Analytics**: Track texture views and downloads
3. **Implement User System**: Allow public user registration
4. **Add Comments**: Let users comment on textures
5. **SEO Optimization**: Add metadata and sitemaps
6. **Performance**: Implement caching and CDN
7. **Monitoring**: Add error tracking and monitoring

## 📞 Support

If you encounter any issues:

1. Check this documentation first
2. Review the error logs in console
3. Verify environment variables are set correctly
4. Test database connection independently

The application now has a complete, professional MongoDB Atlas integration with a full-featured admin panel! 🎉
