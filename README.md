## School Finder
### A webbased application that uses a Firebase Database of DPS schools and Google Map APIs to help parents find great schools for their kids based on commute time and distance.

Checkout the app [here](https://denver-school-finder.herokuapp.com/).

## Project Screen Shot(s)

![My image](./screenshots/school_finder_welcome.png)

![My image](./screenshots/school_results.png)

![My image](./screenshots/school_directions.png)

## Installation and Setup Instructions

Clone down this repository. You will need `npm` installed globally on your machine.  

Installation:

`npm install`  

<!-- To Run Test Suite: //tests will be pushed up shortly -->

<!-- `npm test`   -->

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

## Reflection

This was a self-directed project at the end of Module 3 at [Turing School of Software & Design](www.turing.io).  

I set out to build a React - Redux web application built on top of a Firebase Database and Google Maps APIs that allowed users to quickly and easily search for and get directions to schools within their desired commute parameters for their kids. I am very comfortable with React and Redux and was excited to build a robust application with them that presented data from the internet in a more helpful and productive way for parents.

This project was a great opportunity to continue building my skills in React and Redux while learning a lot about how to implement Google Maps API service.  As a front-end developer, it was also beneficial to spend some time thinking about the database I was building with DPS school data scrubbed from a CSV file downloaded from their website.

The biggest challenge I had was with rendering directions on the page in a React framework.  To solve the problem, I imported a JS library that gave me pre-build components to implement in my code. This ended up being a really great learning opportunity for me and  am excited to continue to explore additional libraries in future projects.

As a former staff member at Teach For America, I care deeply about making sure all children have the opportunity to attain an excellent education and this project reflects my desire to use my skills as a developer and problem solver to ensure that is a reality.

### Additional Development 
_Give the short amount of time I had to work on this project - approximately 1 week - I do not consider this application to be finished.  The list below represents the remaining issues I will be working on as time allows (also tracked in the issues section of this repo)_
- Build out testing suite for FE components (and server-side when Postgres DB is implemented)
- Incorporate CircleCI deployment protocol and move hosting to Heroku
- Transition Firebase DB to Express w/ Knex and Postgres
- Refactor Google Directions API calls and filtering into more organized components
- Refactor lifecycles for smoother transition to display school result pins
- Refactor Google Directions and Distance API calls into Promise.all() functions
- Add advanced filter options (includes adding necessary data in new Postgres migration and seed files)
- Add user profile component to save home address and favorited schools
- Format and build out pop-up windows on individual pin clicks
- Customize pins for home and school using Google Markers API
- Create admin portal for managing "instances" of the app for specific schoool districts (includes data uploads)
