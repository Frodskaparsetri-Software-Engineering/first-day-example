# First Day Example

## Prerequisite:
- Decide who is the **customer** and who is the **developer**
- Create a **product specification**

## Step 1: Production Specification
1. Showcase the original **product specification**

## Step 2: Set up a GitHub Project
1. Create a new GitHub repo
2. Create a GitHub Project
3. Add Tasks:
   1. As a user I want a website
      1. Setup the GitHub Project
      2. Setup a React App utilizing Typescript
      3. Clean the React Project
   2. As a developer I want a CI/CD Pipeline for RAD
      1. Setup a Dockerfile
      2. Setup a GitHub Actions pipeline
      3. Setup a QA step to the pipeline
      4. Setup a Build and Release step to the pipeline
      5. Run the QA and Build step on any branch
      6. Only run the Release step on the master branch 
   3. As a developer I want to enforce PRs to maintain code reliability
      1. Remove the ability to push into master
      2. Enforce Pull Requests
      3. Run the QA pipeline step on PR
      4. Deny PR if QA step fails
   4. Add a Greeting Message
      1. (The user expliclity asked for a large greeting text that says "Hello World")
      2. Add the greeting message

## Step 3: Clone the GitHub Project
- Just clone it

## Step 4: Create a new React App (Running Typescript)
1. write in the terminal:
   1. ```npx create-react-app first-day --template typescript```
   2. ```yarn create react-app my-app --template typescript```
   3. ```yarn global add react-scripts```
2. Run the app to make sure it is working
   1. ```yarn start```
3. Run the tests to make sure they are passing
   1. ```yarn test```

## Step 5: Push the web app
1. git add .
2. git commit -m "initial release"
3. git push
