# Interview Reports - Part I

BIT Frontend Bootcamp Final Project - Web app system for tracking job interviews.

## Reports API

Regarding interviews reports API you will be using a local web server. Complete API which is needed for developing your tasks can be found at: [github repo](https://github.com/nenadbugaric/interviews-reports-api-mock/)

Set up instructions:

- git clone https://github.com/nenadbugaric/interviews-reports-api-mock/
- git checkout auth-client
- npm install
- npm start

On the github repository page you will find all information about how to start a web server and how to use API locally for development.

## Project

Project is divided into two sections.

- This is first one - UI for viewing already existing candidates and reports which are created for those candidates.

Public web application should consist of:

- List of Candidates (landing page)
  - Candidates will appear in cards layout
  - List of Candidates can be filtered by Candidate Name
  - For each Candidate, Name, Avatar and Email should be shown
- Candidate Reports Page
  - All details about the Candidate should be shown
    - Name
    - Avatar
    - Email
    - Education
  - List of all Reports related to the selected Candidate should be shown including
    - Company
    - Interview Date
    - Status
  - User should be able to select a Report from the list in order to see a full Report
    - Report details should be shown in Modal Dialog

## Tools

- ReactJS
- Semantic HTML5 markup
- SCSS
- BEM

## Screenshots

![picture alt](screenshots/mobile-candidates.png "Mobile all candidates page")
![picture alt](screenshots/mobile-candidate.png "Mobile single candidate page")
![picture alt](screenshots/mobile-modal.png "Mobile view modal")

![picture alt](screenshots/desktop-candidates.png "Desktop all candidates page")
![picture alt](screenshots/desktop-candidate.png "Desktop single candidate page")
![picture alt](screenshots/desktop-modal.png "Desktop view modal")
