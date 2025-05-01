---
title: "Task Management API (In Progress)"
description: "A RESTful API for organizing projects and tracking tasks built with Laravel"
pubDate: "2025-05-01"
heroImage: "/task-management-api.png"
---
# Task Management API (In Progress)

*A RESTful API for organizing projects and tracking tasks built with Laravel*

*Published: May 1, 2025*

This project implements a comprehensive **RESTful API** that enables teams to **organize projects** and **track tasks** efficiently. Built with Laravel, it features robust authentication, role-based access control, and an **event-driven architecture** for real-time notifications.

**Project Status**: Currently in the testing phase. Core functionality is implemented and undergoing thorough testing and refinement.

---

## 📎 GitHub Repository

🔗 In Development

---

## 📊 Overview

The Task Management API provides a complete backend solution for project management applications. With granular permissions and comprehensive event notifications, it allows teams to:

- Create and manage projects with detailed metadata
- Assign and track tasks with priorities and deadlines
- Receive real-time notifications for task assignments and status changes
- Generate project completion statistics and reports

---

## 🧠 Technologies Used

- **Laravel Framework**
- **MySQL/PostgreSQL**
- **Laravel Sanctum** for API authentication
- **Event-driven architecture** with Laravel Events
- **RESTful API** design principles
- **Test-driven development** with PHPUnit
- **Docker** support for development and deployment

---

## ⚙️ Features

### Authentication & Authorization
- Secure user registration and authentication
- Role-based access control (Admin, Project Manager, Team Member)
- Token-based API authentication with Sanctum

### Project Management
- Complete CRUD operations for projects
- Team member assignment with role management
- Project statistics and completion tracking

### Task Management
- Comprehensive task tracking with priority levels
- Task assignment and status workflow
- Filtering by status, priority, and assignment

### Event Notifications
- Real-time notifications for task creation
- Assignment notifications to relevant team members
- Status change notifications with history tracking

---

## 🚀 API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Login and get auth token

### Projects
- `GET /api/projects` - List all accessible projects
- `POST /api/projects` - Create a new project
- `GET /api/projects/{id}` - Get project details
- `PUT /api/projects/{id}` - Update a project
- `DELETE /api/projects/{id}` - Delete a project

### Tasks
- `GET /api/projects/{project_id}/tasks` - List tasks
- `POST /api/projects/{project_id}/tasks` - Create a task
- `GET /api/projects/{project_id}/tasks/{task_id}` - Get task details
- `PUT /api/projects/{project_id}/tasks/{task_id}` - Update a task
- `DELETE /api/projects/{project_id}/tasks/{task_id}` - Delete a task

---

## 📦 Project Structure

The API follows Laravel's conventional structure with:

- Models with eloquent relationships
- Controllers following RESTful conventions
- Events and listeners for notifications
- Comprehensive test suite for all components
- Docker configuration for easy deployment

### 📂 Directory Structure

<pre><code>
task-management-api/
├── app/
│   ├── Console/
│   │   └── Commands/
│   │       └── SetupTaskManagementProject.php
│   ├── Events/
│   │   ├── TaskAssigned.php
│   │   ├── TaskCreated.php
│   │   └── TaskStatusChanged.php
│   ├── Exceptions/
│   │   └── Handler.php
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── ProjectController.php
│   │   │   │   └── TaskController.php
│   │   │   └── Controller.php
│   │   ├── Middleware/
│   │   └── Requests/
│   │       ├── Auth/
│   │       │   ├── LoginRequest.php
│   │       │   └── RegisterRequest.php
│   │       ├── Project/
│   │       │   ├── StoreProjectRequest.php
│   │       │   └── UpdateProjectRequest.php
│   │       └── Task/
│   │           ├── StoreTaskRequest.php
│   │           └── UpdateTaskRequest.php
│   ├── Listeners/
│   │   ├── SendTaskAssignmentNotification.php
│   │   ├── SendTaskCreationNotification.php
│   │   └── SendTaskStatusChangeNotification.php
│   ├── Models/
│   │   ├── Project.php
│   │   ├── Task.php
│   │   └── User.php
│   ├── Notifications/
│   │   ├── TaskAssigned.php
│   │   ├── TaskCreated.php
│   │   └── TaskStatusChanged.php
│   └── Providers/
│       ├── AppServiceProvider.php
│       ├── AuthServiceProvider.php
│       ├── EventServiceProvider.php
│       └── RouteServiceProvider.php
├── bootstrap/
├── config/
├── database/
│   ├── factories/
│   │   ├── ProjectFactory.php
│   │   ├── TaskFactory.php
│   │   └── UserFactory.php
│   ├── migrations/
│   │   ├── 2014_10_12_000000_create_users_table.php
│   │   ├── 2014_10_12_100000_create_password_resets_table.php
│   │   ├── 2023_01_01_000001_create_projects_table.php
│   │   ├── 2023_01_01_000002_create_tasks_table.php
│   │   └── 2023_01_01_000003_create_project_user_table.php
│   └── seeders/
│       ├── DatabaseSeeder.php
│       ├── ProjectSeeder.php
│       ├── TaskSeeder.php
│       └── UserSeeder.php
├── docker/
│   ├── nginx/
│   │   └── conf.d/
│   │       └── app.conf
│   └── mysql/
│       └── my.cnf
├── routes/
│   ├── api.php
│   ├── console.php
│   └── web.php
├── tests/
│   ├── Feature/
│   │   ├── Auth/
│   │   │   ├── LoginTest.php
│   │   │   └── RegisterTest.php
│   │   ├── Project/
│   │   │   ├── CreateProjectTest.php
│   │   │   ├── DeleteProjectTest.php
│   │   │   ├── ListProjectsTest.php
│   │   │   └── UpdateProjectTest.php
│   │   └── Task/
│   │       ├── AssignTaskTest.php
│   │       ├── CreateTaskTest.php
│   │       ├── DeleteTaskTest.php
│   │       ├── ListTasksTest.php
│   │       └── UpdateTaskTest.php
│   └── Unit/
│       └── Models/
│           ├── ProjectTest.php
│           ├── TaskTest.php
│           └── UserTest.php
├── docker-compose.yml
├── Dockerfile
└── README.md
</code></pre>
---

## 🧪 Testing

The project includes extensive tests and is currently in the testing phase:

- **Unit tests** for models and relationships
- **Feature tests** for API endpoints
- **Integration tests** for the event system

Current testing progress:
- ✅ Model relationships and methods
- ✅ Authentication endpoints
- ✅ Project CRUD operations
- ✅ Task management features
- 🔄 Event notification system
- 🔄 Performance optimization


Next steps include finalizing the event notification system testing and implementing performance optimizations before the initial release.