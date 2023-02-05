# Project 14 - Pass a jQuery library to React

## Author

_Behar Abdel kader : student from openclassrooms

## Intro

I present to you my latest project 14 of the course "Front-End Developer: Application Developer - JavaScript React" at OpenClassrooms.
The goal is to create an internal application that manages employee records. This company uses an internal web application, called HRnet.
HRNet, is based on JQuery. It's about setting up a transition to a React application as well as an update of existing JQuery plugins to a React library, of course.

## Goals

1. Update the different pages:
  Make a new version of the "Create Employee" and "Employee List" pages with React.
2. Use a tool (Redux) Add state management system (current version uses local storage).
3. Modernize the application (the design) Ensure that everything is consistent in terms of style.
4. Convert one of the four current jQuery plugins to React. Replace the 3 remaining jQuery plugins with React components that you will code yourself,                       or that you can import from existing libraries if you are short of time.
5. And of course if we have time, we can test the React code with a suite of unit tests. Otherwise, only manual testing is necessary.

## Getting Started Dependencies

This project was bootstrapped with Create React App and use

- React (18.2.0)
- Redux (4.2.0)
- Redux-persist (6.0.0)
- React router (6.5.0)

## Node Version

- V 18.9.0

## Modal component for ReactJ for Project 14

This module has been created for project 14 Pass a jQuery library to React : This is a simple modal component functioning at external module
[Modal component repo](https://github.com/Kuznetsov-100-Rads-Bar/modal-component)

## NPMJS online registry for JavaScript packages

[behar_modal-component](https://www.npmjs.com/package/behar_modal-component?activeTab=readme)

## Available Scripts

### all HRNet application jQuery must be converted to React

Test the Front-End project :

1. Fork this repo : : [https://github.com/OpenClassrooms-Student-Center/P12_Front-end](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)
2. Clone the repo into your computer
3. Open a terminal windows
4. Run the following commands: `click to run live server`
5. Server is started at port : 5500  [http://127.0.0.1:5500/](http://127.0.0.1:5500/) in browsers
  
## Installing and launching Front-End

- Clone the repository of HRnet Faites passer une librairie jQuery vers React:

> git clone <https://github.com/Kuznetsov-100-Rads-Bar/Projet14>

- Inside this front-end repository, install dependencies:

> npm install

- Launch :

> npm start

- Launch front-end on port 3000: [http://localhost:3000](http://localhost:3000)
- Front-end is now rendered at URL <http://localhost:3000>.

### Lighthouse performance by comparing old and new app

Builds the app for production to the `build`:

and the command :
`npm run build`  Creating an optimized production build and you create a Build folder in your project

On the project open the terminal and type the first command :
`npx serve -s build/`

Optimizes the build for the best performance.
Launch Local:    <http://localhost:3000>

You can finally test performance with LightHouse either with your Chrome or Mozilla browsers in your development console, and click on analyze page load, It will generate a lighthouse report. (You can compare with jQuery vs React version)

### Optional

**Cypress** is an automated testing tool for web applications. It allows testing the user interface and interactions with the application in a fast and reliable way.

### Installing

Cypress via npm
`cd/your/project/path`

`npm install cypress --save-dev`

In your project go to the package.json and on the "scripts" part: you will have the line:
`"cypress:open": "cypress open"`

which will allow us to launch it in the other second terminal with the command: `npm run cypress:open`

Don't forget, You will already have another terminal open which is your project (`npm start`)

A window will open with the message: Welcome to Cypress!
Review the differences between each testing type : E2E Testing or Components Testing
And refer to the Cypress documentation in the link below

### `Links :`

To learn :

- React, check out the [React documentation](https://reactjs.org/)
- Redux, check out the [Redux documentation](https://redux.js.org/)
- Redux Persist, check out the [blog](https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/)
- Cypress create tests for your modern web applications, check out the [Cypress documentation](https://www.cypress.io/) and installing [https://docs.cypress.io/guides/getting-started/installing-cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
