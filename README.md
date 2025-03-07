# Express MySQL Migration App

This project is an Express.js application that utilizes MySQL for data storage and includes a migration setup for managing database schema changes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Running Migrations](#running-migrations)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```sh
   cd express-mysql-migration-app
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory and add your database connection details:
   ```env
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

## Usage

To start the application, run:
```sh
npm start
```

The server will start on `http://localhost:3000`.

## Running Migrations

1. Install a migration tool like Sequelize or Knex.js.
2. Configure the migration tool in your project.
3. To run migrations, use the command specified in your package.json scripts, typically something like:
   ```sh
   npm run migrate
   ```
4. To create a new migration, use the command provided by the migration tool, for example:
   ```sh
   npx sequelize-cli migration:generate --name create-users-table
   ```

## API Endpoints

- `GET /api/users` - Retrieve all users
- `GET /api/users/:id` - Retrieve a user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update an existing user
- `DELETE /api/users/:id` - Delete a user

## License

This project is licensed under the MIT License.
