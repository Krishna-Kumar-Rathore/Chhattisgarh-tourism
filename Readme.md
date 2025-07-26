🏛️ Chhattisgarh Tourism - MERN Application
A comprehensive tourism web application showcasing the beautiful destinations, culture, and heritage of Chhattisgarh, India. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

🌟 Features
👥 User Features
User Authentication - Secure signup, login, and logout functionality
Explore Destinations - Browse places categorized by type (Natural, Historical, Religious, Cultural, Adventure)
City-wise Organization - Discover places organized by cities across Chhattisgarh
Wishlist Management - Save favorite places for future reference
Search & Filter - Find places by name, city, or category
Responsive Design - Optimized for desktop, tablet, and mobile devices
🔧 Admin Features
Admin Dashboard - Comprehensive management interface
Place Management - Add, edit, and delete tourist destinations
Image Management - Upload multiple images via URL links
Featured Places - Mark places as featured for homepage display
Real-time Statistics - View total places, cities covered, and more
📱 Core Pages
Be Inspired - Inspirational stories and featured destinations
Places to Go - Complete listing of all tourist places
Things to Do - Activities categorized by type
Wishlist - Personal collection of saved places
🚀 Tech Stack
Frontend
React.js - Component-based UI library
React Router - Client-side routing
Axios - HTTP client for API requests
Context API - State management
Responsive CSS - Custom styling without external frameworks
Backend
Node.js - JavaScript runtime environment
Express.js - Web application framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling
JWT - JSON Web Tokens for authentication
bcryptjs - Password hashing
📋 Prerequisites
Before running this application, make sure you have the following installed:

Node.js (v14 or higher)
MongoDB (v4.4 or higher)




🔗 API Endpoints
Authentication
POST /api/auth/register - User registration
POST /api/auth/login - User login
GET /api/auth/profile - Get user profile
Places
GET /api/places - Get all places (with filters)
GET /api/places/:id - Get single place
POST /api/places - Create place (Admin only)
PUT /api/places/:id - Update place (Admin only)
DELETE /api/places/:id - Delete place (Admin only)
POST /api/places/:id/wishlist - Toggle wishlist
GET /api/places/cities - Get all cities
🎨 Responsive Design
The application is fully responsive with breakpoints for:

Mobile: ≤ 768px
Tablet: 769px - 1024px
Desktop: > 1024px
Key Responsive Features:
Fixed navigation with mobile hamburger menu
Responsive grid layouts
Flexible typography using clamp()
Touch-friendly interface on mobile
Optimized image displays
🔐 Security Features
JWT Authentication - Secure token-based authentication
Password Hashing - bcrypt for secure password storage
Role-based Access - Admin and user role separation
Route Protection - Protected admin routes
Input Validation - Server-side validation for all inputs
🌐 Environment Variables
Create a .env file in the backend directory:

env
# Database
MONGODB_URI=mongodb://localhost:27017/chhattisgarh_tourism

# JWT
JWT_SECRET=your_super_secret_jwt_key_here

# Server
PORT=5000

# Admin Creation (Optional)
CREATE_DEFAULT_ADMIN=true
ADMIN_NAME=Admin User
ADMIN_EMAIL=admin@chhattisgarh.com
ADMIN_PASSWORD=admin123
🚀 Deployment
Backend Deployment (Railway/Heroku)
Create a new app on your platform
Set environment variables
Connect your GitHub repository
Deploy
Frontend Deployment (Netlify/Vercel)
Build the project: npm run build
Deploy the build folder
Update API URLs to production backend
Database (MongoDB Atlas)
Create a MongoDB Atlas cluster
Update MONGODB_URI in environment variables
Whitelist your deployment IP addresses
🤝 Contributing
Fork the repository
Create a feature branch: git checkout -b feature-name
Commit your changes: git commit -m 'Add some feature'
Push to the branch: git push origin feature-name
Submit a pull request
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🐛 Known Issues
Images are stored as URLs (consider implementing file upload for production)
No image optimization (consider adding image compression)
Basic search functionality (could be enhanced with full-text search)
🔮 Future Enhancements
 File upload for images with cloud storage
 Advanced search with filters
 User reviews and ratings
 Interactive maps integration
 Social media sharing
 Email notifications
 Multi-language support
 Weather integration
 Booking system integration
📞 Support
If you encounter any issues or have questions, please:

Check the Issues page
Create a new issue if your problem isn't already reported
Provide detailed information about the problem
🙏 Acknowledgments
Inspiration from Chhattisgarh Tourism Board React.js community for excellent documentation MongoDB team for the robust database solution All contributors who helped improve this project Made with ❤️ for promoting Chhattisgarh Tourism

📊 Project Statistics
Total Components: 15+
API Endpoints: 10+
Responsive Breakpoints: 3
Database Models: 2
Authentication: JWT-based
