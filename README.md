Minimal Library Management System - Frontend 📚
This is the frontend for the Minimal Library Management System, a client-side application built with React, TypeScript, and Redux Toolkit Query. It provides a clean, responsive, and user-friendly interface for managing books and borrowing them without any authentication.
Live Demo: [Your Live Frontend Link]
Features
Public Access: All pages and features are publicly accessible without login.
Book Management (CRUD):
View All Books: A responsive table displays all books with details like Title, Author, Genre, ISBN, Copies, and Availability.
Add New Book: A dedicated form to add new books to the library.
Edit Book: Seamlessly update book information, which reflects instantly in the UI.
Delete Book: A confirmation dialog ensures accidental deletions are prevented.
Borrowing System:
Borrow a Book: A simple form to borrow a book, with validation to ensure the requested quantity does not exceed available copies.
Availability Logic: A book is automatically marked "Unavailable" if its copy count reaches zero.
Borrow Summary: A dedicated page showing an aggregated list of all borrowed books, including the total quantity borrowed for each.
Responsive Design: The UI is fully responsive and works beautifully on mobile, tablet, and desktop screens.
User-Friendly Interface: Clean and minimalist design with intuitive navigation and clear actions.
✨ Bonus Features Implemented
Optimistic UI Updates: UI updates instantly after an action (e.g., add, edit, delete) for a smoother user experience.
Toast Notifications: Real-time feedback for success or error messages using toast notifications.
Type-Safe Forms: All forms are built with type safety to reduce runtime errors.
Technology Stack
Framework: React + Vite
Language: TypeScript
State Management: Redux Toolkit & RTK Query
Styling: Tailwind CSS
Linting/Formatting: ESLint & Prettier
Pages & Routes
/books – Displays a list of all books.
/create-book – Form to add a new book.
/edit-book/:id – Form to update an existing book.
/borrow/:bookId – Form to borrow a selected book.
/borrow-summary – Displays an aggregated summary of borrowed books.
