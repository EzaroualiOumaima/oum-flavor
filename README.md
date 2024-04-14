# OumFlavor Restaurant Reservation System

Welcome to OumFlavor! This is a full-stack restaurant reservation project created using Next.js with Redux Toolkit for state management. OumFlavor aims to streamline the reservation process for customers while providing a comprehensive platform for managing contacts, reviews, reservations, and dishes.

# Features

- Reservation Management: Easily make, modify, or cancel reservations through the intuitive reservation system.
- Contact Management: Store and manage customer contact information for easy communication and marketing.
- Reviews: Collect and display customer reviews to showcase the dining experience at OumFlavor.
- Menu Management: Add, edit, and remove dishes from the menu to keep it up-to-date and engaging.

# Technologies Used

- Next.js: A React framework for building server-side rendered and statically generated web applications.
- MongoDB: A NoSQL database used for storing and managing data related to reservations, contacts, reviews, and dishes.
- Jest: A delightful JavaScript Testing Framework with a focus on simplicity.
- React Testing Library: A testing library for React that encourages good testing practices.
- Docker: A platform for developing, shipping, and running applications in containers.
- Vercel: A cloud platform for static sites and serverless functions that allows for easy deployment of Next.js applications.

# API Routes

Dishes: Retrieve, add, update, or delete dishes from the menu.

- Route: localhost:3000/api/dishes
- Methods:
- GET: Retrieve all dishes from the menu.
- POST: Add a new dish to the menu.
- PUT: Update an existing dish on the menu.
- DELETE: Delete a dish from the menu.
- Reviews: Retrieve, add, update, or delete customer reviews.

- Route: localhost:3000/api/reviews
- Methods:
- GET: Retrieve all reviews.
- POST: Add a new review.
- PUT: Update an existing review.
- DELETE: Delete a review.

Reservations: Retrieve, add, update, or delete reservations.

- Route: localhost:3000/api/reservations
- Methods:
- GET: Retrieve all reservations.
- POST: Add a new reservation.
- PUT: Update an existing reservation.
- DELETE: Delete a reservation.
- Contacts: Retrieve, add, update, or delete customer contacts.

- Route: localhost:3000/api/contacts
- Methods:
- GET: Retrieve all contacts.
- POST: Add a new contact.
- PUT: Update an existing contact.
- DELETE: Delete a contact.

# Installation

To run OumFlavor locally, follow these steps:

- Clone the repository: git clone https://github.com/yourusername/oumflavor.git
- Navigate to the project directory: cd oumflavor
- Install dependencies: npm install
- Set up environment variables: Create a .env file based on .env.example and fill in the necessary variables.
- Start the development server: npm run dev
- Visit http://localhost:3000 in your browser to view the application#.

# Testing

To run tests for OumFlavor, follow these steps:

- Ensure all dependencies are installed by running npm install.
- Run npm test to execute the test suite.
- Jest will run all tests and provide feedback on their success or failure.

# Deployment with Docker

To deploy OumFlavor using Docker, follow these steps:

Build the Docker image:

- docker build -t imagename .
- Tag the Docker image with your Docker Hub username and repository name:

- docker tag imagename username_dockerhub/imagename
  Push the Docker image to Docker Hub:

- docker push username_dockerhub/imagename
  Replace imagename with the name of your Docker image, and username_dockerhub with your Docker Hub username.

# Deployment with Vercel

To deploy OumFlavor using Vercel's GitHub integration, follow these steps:

Link Your GitHub Repository to Vercel:

- Log in to your Vercel account.
- Navigate to the Vercel dashboard.
- Click on the "Import Project" button.
- Select your GitHub repository containing the OumFlavor project.
- Configure Deployment Settings:

- Once your repository is imported, you'll be prompted to configure deployment settings.
  Choose the branch you want to deploy (e.g., main or master).
  Specify the build settings if necessary (e.g., build command, output directory).

  # Usage

- Making a Reservation: Navigate to the reservation page, fill in the required details, select your preferred date and time, and submit the form.
- Managing Contacts: Add, edit, or delete customer contact information from the contacts page.
- Viewing Reviews: Browse through customer reviews on the reviews page to get insights into the dining experience at OumFlavor.
- Managing Dishes: Add new dishes, update existing ones, or remove dishes from the menu on the dishes page.

# Contributing

Contributions are welcome! If you'd like to contribute to OumFlavor, please fork the repository, make your changes, and submit a pull request.

# Contact

For any inquiries or support, please contact us at oumflavor@gmail.com.

Thank you for choosing OumFlavor! We hope you enjoy your dining experience with us. Bon appétit! 🍽️
