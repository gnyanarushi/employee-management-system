# Employee Management System

A **full-stack web application** for managing employee records, built with a **React (Vite) frontend** and a **Spring Boot backend**.  
The system provides a modern UI and powerful API for efficient employee management.

---

## ✨ Features

### 🔹 Frontend (React + Vite)
- 📋 **Employee List View**: Display all employees in a clean table with details (name, email, job title, etc.).  
- ➕ **Add Employee**: Add new employees via a form.  
- ✏️ **Edit Employee**: Update existing employee details.  
- ❌ **Delete Employee**: Remove employees from the system.  
- 👀 **View Employee Details**: See detailed info for each employee.  
- 📱 **Responsive Design**: Works across desktop and mobile.  
- 🔗 **API Integration**: Communicates with backend using RESTful APIs.  

### 🔹 Backend (Spring Boot)
- ⚡ **RESTful API** for employee CRUD operations.  
- 🗂 **Employee Entity**: Stores employee data (id, name, email, job title, etc.).  
- 🛠 **Service Layer**: Business logic for employee management.  
- 💾 **Repository Layer**: Database access via Spring Data JPA.  
- 🚨 **Exception Handling**: Meaningful error responses for missing/invalid resources.  
- 🌐 **CORS Support**: Enables frontend-backend communication.  

---

## 🛠 Tech Stack
- **Frontend:** React, Vite, Axios, CSS  
- **Backend:** Java, Spring Boot, Spring Data JPA  
- **Database:** H2 / MySQL (configurable)  
- **Build Tools:** Maven (backend), npm/yarn (frontend)  

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js & npm / yarn  
- Java 17+  
- Maven  

### 📥 Installation & Run

#### 1. Clone the repository
```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
cd emsApplication
mvn spring-boot:run
cd ems-frontend
npm install
npm run dev
mvn test
