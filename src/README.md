# E-Learning Platform

## Overview
This is a fully responsive E-Learning platform where users can browse, search, and enroll in various courses. The platform supports video previews, course details, and a structured curriculum.

## Features
- 🏠 **Home Page**: Displays featured courses and a call-to-action section.
- 🔍 **Course Search**: Users can search for courses using the search bar.
- 📚 **Course List Page**: Displays all available courses with filtering options.
- 🎥 **Course Details Page**: Provides in-depth course information, including a structured syllabus and preview lectures.
- 🏫 **Context API**: Manages global state for courses, ratings, and user roles.
- 🛠 **Fully Responsive UI**: Works on all screen sizes.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: Context API
- **Routing**: React Router
- **Utilities**: Humanize Duration (for time formatting)

## Installation & Setup
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-repo/e-learning-platform.git
   cd e-learning-platform
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Start the Development Server:**
   ```sh
   npm run dev
   ```

## Folder Structure
```bash
📂 src
 ┣ 📂 assets        # Images & Static Assets
 ┣ 📂 components    # Reusable Components (SearchBar, CourseCard, etc.)
 ┣ 📂 context       # AppContext (Global State Management)
 ┣ 📂 pages         # Main Pages (Home, CourseList, CourseDetails)
 ┣ 📂 routes        # Route Management
 ┣ 📜 main.jsx      # Entry Point
 ┗ 📜 App.jsx       # Root Component
```

## Key Files & Explanation
### 1️⃣ `AppContext.js`
- Manages all global states such as course data, ratings, and enrollments.
- Functions like `calculateRating`, `calculateCourseDuration`, and `calculateNoofLectures` help with course analytics.

### 2️⃣ `CourseList.jsx`
- Fetches and displays all courses.
- Implements search functionality to filter courses dynamically.

### 3️⃣ `CourseDetails.jsx`
- Displays full course details, including syllabus and video previews.
- Allows users to enroll in the course.

## Future Enhancements
- 🔐 User authentication (login/signup system)
- 📝 Quiz & assignment support
- 💳 Payment integration for premium courses

## Contributing
Feel free to contribute! Fork the repo, make changes, and submit a pull request. 🚀

## License
MIT License © 2025 Great Stack