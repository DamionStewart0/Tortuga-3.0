

# Tortuga-3.0

Overview

This full stack React on Ruby on Rails application allows Users to reveiw driver from different ride-sharing platform. The general users will have the ability to browse by company the different drivers and their reveiws, while authenticated user will have the ability create, update, and delete their review. 

MVP

Tortuga MVP is to complete full CRUD capability for creating, updating and destroying reveiws. The user will be able to create a profile and see their reveiws and those that were created by others in a column layout.

Goals


    Full CRUD workflow for review component

    Create seed data to setup API

    Execute full-stack application development

Libraries and Dependencies
Library 	Description
React 	powers the application functionality/environment
React Router 	allows application to be navigable without having to refresh the page
Ruby 	dynamic, open source programming language that focuses on simplifying code and making it more productive.
Rails 	server-side web application framework
Material UI 	a component library that allows for easy styling using pre-built component




Client (Front End)
Wireframes

    Desktop View

#### Desktop Prototype

https://wireframepro.mockflow.com/view/M18340d28b265d0f99d5d495e790a2c2a1614960151674#/page/14acbeaa4f51416dbb114548fb063f48




#### Component Tree
 https://whimsical.com/tortuga-component-D9CMQM6C7Ae9SaXSZrPMYe


Component Hierarchy


### Component Breakdown
| component|   type    | state | props |             description                   |
| :------: | :--------:|:-----:|:-----:| :----------------------------------------:|
| Header   |functional |  n    | n     | Header will contain the navgation and logo|
| Nav      |functional |  y    | n     | Nav will  link different pages            |
| Login    |functional |  y    | y     | User can register or login to account     |
| Review   |functional |  n    | y     | Show driver's review                      |
| User     |functional |  n    | y     | User can create account, add and delete   |
| Driver   |functional |  n    | y     | Driver full profile and reviews           |





| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Add login/register        |    H     |       24hrs     |     TBD      |    TBD      |
| Create FE crud            |    H     |      20hrs      |     TBD      |    TBD      |
| Create BE crud            |    H     |      18hrs      |     TBD      |    TBD      |
| Create seed data          |    H     |      10hrs      |     TBD      |    TBD      |
| Create header             |    H     |       5hrs      |     TBD      |    TBD      |
| Style footer              |    H     |       5hrs      |     TBD      |    TBD      |
| Style forms               |    H     |       5hrs      |     TBD      |    TBD      |
| Style buttons             |    H     |       5hrs      |     TBD      |    TBD      |
| Deployment                |    H     |      1hrs       |     TBD      |    TBD      |
| TOTAL                     |          |     101 hrs     |     TBD      |    TBD      |





#### Backend (Server) 

ERD model

 https://app.diagrams.net/#G1N_f7x7OjqdMG3JZDANo0iOxmAYpiIbSh




