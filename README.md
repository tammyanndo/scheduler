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
