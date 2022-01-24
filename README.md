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
2. Build the app to make sure it builds
   1. ```yarn build```
   2. if it doesn't build, then add the following to package json:
      1. ``"mini-css-extract-plugin": "2.4.5"``
      2. and: ```"resolutions": { "mini-css-extract-plugin": "2.4.5" }```
      3. then run ```yarn build``` again
3. Run the app to make sure it is working
   1. ```yarn start```
4. Run the tests to make sure they are passing
   1. ```yarn test```

## Step 5: Push the web app
1. git add .
2. git commit -m "initial release"
3. git push

## Step 6: Update the PR Requirements
- I can't because I have to pay as an organization

## Step 7: Setup the CI Pipeline
- Add a GitHub Actions to a new branch
- Past the following to it:

```yml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches:
      - '**'
  pull_request:
    branches: [ main ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "QA"
  QA:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      # Runs a single command using the runners shell
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Verify Build
        run: yarn build
      - name: Run Tests
        run: yarn test
```

