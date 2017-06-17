# NgGithubProfileSearcher
Angular 4 SPA which utilizes the Github API to allow a user to search for github profiles and get information about the profile

## Project Details

A SPA built using Angular 4 which allows a user to search for another user on Github via their username and get details about their github profile such as repositories via the Github API.


## Getting Started

* Download or clone the repository

* Run `npm install` to install the necessary dependancies

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will          automatically reload if you change any of the source files.

* Run `ng build` to build the project. The build artifacts will be stored in the `dist/`       directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## License
MIT

## TODO - All Completed

* Create Components *completed

 - Create page to display user and user's repository data from API *completed
 - Add area on page to search for users *completed

* Integrate Github API *completed
  - Create service to fetch user data *completed
  - Create service to fetch user repositories *completed
  - Limit requests to API  by sending requests only when a user has stopped typing for a                 certain peroid of time and only when the new request is diffrent from the previous request           *completed

