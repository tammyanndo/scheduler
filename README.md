# Interview Scheduler

## Description
Interview Scheduler is a single-page application that students can use to book, edit, delete, and track interview appointments. Interview Scheduler uses React and custom hooks to manage appointments. Interview Scheduler was developed and tested using various platforms including Storybook, webpack-dev-server, Jest, and Cypress. 

## Features
- Interviews are available to be booked from Monday to Friday, between 12pm and 5pm
- On the sidebar, the days of the weeks are displayed, along with the available spots for each day
- The user can select the day they would like to book their interview from the sidebar
- Once the day is selected, the main body of the app will display all of the time slots for that day
- Each time slot will either be available, as displayed by a "+" symbol, or have an appointment saved to that slot
- If available, the user can click on the slot, fill in their name, select an interviewer, and save
- If the interview was successfully saved, the slot will display the appointment details, and the user will - be able to edit or delete the appointment
- If there is error during saving or deleting, the user is alerted with an error message, and redirected back to the previous state, where they can try their action again 
- If the user does not enter in a name and tries to save the appointment, an error message will print to let they user know that the student name cannot be blank

### Main App
!["Interview Scheduler - main app view"](https://github.com/tammyanndo/scheduler/blob/master/docs/Interview-Scheduler-main.png)
*The user can view available appointment slots to book an interview, and edit and delete existing appointments. The sidebar allows the user to select the day they would like to view, as well as the number of spots available for that day.*

### New Interview 
!["Interview Scheduler - new interview](https://github.com/tammyanndo/scheduler/blob/master/docs/Interview-Scheduler-new.png)
*When the user clicks on the "+", the slot will show an input where they can put in the student name, as well as select available interviewers for that time. Once complete, they can click the "Save" button to save the interview, or they can click "Cancel" to cancel booking.*

### Confirm Delete
!["Interview Scheduler - delete confirmation](https://github.com/tammyanndo/scheduler/blob/master/docs/Interview-Scheduler-confirm.png)
*When the user clicks on the "Delete" icon, a delete confirmation will prompt them to confirm if they would like to proceed with deleting the interview. If they confirm, the appointment will be deleted. If they would not like to delete the interview, they would click "Cancel" and the interview will reappear in the same time slot.*


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Project Stack
Front-End: > React, Axios, JSX, HTML, SASS, JavaScript

Back-End: > Express, Node.js, PostgreSQL

Testing: > Storybook, Webpack Dev Server, Jest, Testing Library and Cypress
