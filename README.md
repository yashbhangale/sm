# My Website

This project consists of a React frontend and Express/SQLite backend for handling contact form submissions.

## Running with Docker Compose

The easiest way to run the entire application is using Docker Compose:

1. Make sure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed

2. Run the following command in the project root:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: http://localhost (port 80)
   - Backend API: http://localhost:8000

4. To stop the application:
   ```bash
   docker-compose down
   ```

## Manual Setup (without Docker)

### Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Backend

The backend is an Express.js server with SQLite database integration. See the [server README](./server/README.md) for detailed setup instructions.

#### Quick Start for Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Running the Full Application Manually

1. Start the backend server first:
   ```bash
   cd server
   npm run dev
   ```
2. Start the frontend in a separate terminal:
   ```bash
   npm start
   ```
3. The contact form will now save submissions to the SQLite database

## Viewing Saved Contact Submissions

To view all stored contact form submissions:
```bash
cd server
npm run view-contacts
```

## Docker Development Commands

### Rebuilding the Services
If you make changes to the code, you'll need to rebuild the Docker images:
```bash
docker-compose up --build
```

### Running in Detached Mode
To run the services in the background:
```bash
docker-compose up -d
```

### Viewing Logs
To view the logs from all services:
```bash
docker-compose logs -f
```

### Accessing the Container Shell
To get a shell inside a running container:
```bash
docker-compose exec frontend sh
# or
docker-compose exec backend sh
```
