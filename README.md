# Web CRUD Project with Node.js and MySQL
This project is a simple web application for performing CRUD (Create, Read, Update, Delete) operations using Node.js and MySQL.

## Features
- **Create:** Add new users with their name, email, age, and gender.
- **Read:** View a list of users with their details.
- **Update:** Modify user information such as name, email, age, and gender.
- **Delete:** Remove users from the database.

## Technologies Used
- **Node.js:** JavaScript runtime environment used for server-side development.
- **Express.js:** Web application framework for Node.js used for building the backend.
- **MySQL:** Relational database management system used for storing user data.
- **HTML:** Markup language for creating the structure of web pages.
- **CSS:** Styling language for designing the appearance of web pages.
- **JavaScript:** Programming language for client-side interactions and dynamic content.
- **Bootstrap:** Front-end framework for responsive and mobile-first web development.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/web-crud-node-mysql.git
   ```
2. Install dependencies:
   ```bash
   cd web-crud-node-mysql
   npm install
   ```
3. Set up MySQL database:
   - Create a MySQL database named `students.sql`.
   - Import the SQL schema file provided (`students.sql`) to create the necessary table.
4. Configure environment variables:
   - Rename the `.env.example` file to `.env`.
   - Update the `.env` file with your MySQL database credentials.
5. Start the server:
   ```bash
   npm start
   ```
6. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage
- **Create:** Click on the "Add User" button and fill out the form with user details. Click "Submit" to add the user to the database.
- **Read:** The list of users is displayed on the home page.
- **Update:** Click on the "Edit" button next to a user to modify their information. Update the fields and click "Save" to apply changes.
- **Delete:** Click on the "Delete" button next to a user to remove them from the database.
