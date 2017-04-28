# Texas Coders

Texas Coders, is a forum for programmers in the lone star state only. As Texans who program, with the help of the Texas Coders forum, we can work on building a strong community to help develop and grow in our programming pursuits. The style of the forum is broken down into a Q/A format, where a user can ask a question and have other users answer their question.

## Planning

1. Configuration/Dependencies
  * ember-bootstrap
  * Type 'ember install ember-bootstrap' and you should be good to go.
  * Dependencies are located in the 'ember-cli-build.js' directory
  * Bootstrap is used for quickly spinning up good looking websites, using a library of bootstrap css classes.

2. Specs
  * Spec 1: User asks question, User types question, Question is added to front-page and the question generates a individual page for that question.
  * Spec 2: User answers question, User types answer, Answer is added to that question.
  * Spec 3: One-to-many Relationship between Questions and Answers, User types answer, Answer is associated with that Question in a one-to-many relationship.

3. Integration
  * HBS template for Index
  * HBS template for Question (/question/:question_id)
    * Question page should show all answers associated with that question
    * Answers don't need their own page, since they are only shown on the question they are associated with

4. UX/UI
  * row well 'header' (col-md-12), well 'body', row well 'footer' (col-md-12)
  * Color Scheme: #333, #ccc, #fff
  * Questions are listed on the front-page showing Author and Question
    * This would probably be a ul list with a li component, with a for-each loop to cycle through and show
    * The style: h3 (question) -> h4 (author), h3 (question) -> h4 (author), for each question
  * Individual Question Page
    * This would show all details for the question (author, question, notes, etc)
    * The style: h2 (question) -> p (author) -> p (notes), for the question
  * Answers are listed on the Question page
    * This would probably be similar to how I list the Questions
    * The style: h3 (author) -> p (answer), h3 (author) -> p (answer), for each answer

5. Further Exploration (if there is time)
  * Look at integrating users into the site with authentication
  * Look at implementing full CRUD capability, where questions/answers can be deleted
  * Look at implementing upvote/downvote functionality

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd texas-coders`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
