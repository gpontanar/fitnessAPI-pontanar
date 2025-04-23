# fitnessAPI-pontanar

# Routes and Controllers

## Routes:

- User Routes:

POST /users/login - User login route.
POST /users/register - User registration route.

- Inventory Routes:

GET /items/ - Retrieve a list of all inventory intems.
POST /items/ - Add a new inventory item.
GET /items/:id - Retrieve a specific inventory item by its ID.
PUT /items/:id - Update an existing inventory item.
DELETE /items/:id - Delete an inventory item by its ID.

## Controllers:

- User Contollers:

loginUser
registerUser

- Workout Controllers:

getAllWorkoutItems
createWorkoutItem
getWorkoutItemById
updateWorkoutItem
deleteWorkoutItem

//Routes Middleware
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");

app.use("/workouts", workoutRoutes);
app.use("/users", userRoutes);

## Backend installs:

npm init -y
npm install express mongoose
npm install -g nodemon

To Install DB mongodb:
npm install mongodb

Install env package:
npm install cors

Install dotenv package.
npm install dotenv

Installing a bcrypt package:
 npm install bcrypt

Installing JSon Web Token/JWT Package
  npm install jsonwebtoken

# Host fitnessAPI

# Backend API is hosted in render
- URL: https://render.com/




