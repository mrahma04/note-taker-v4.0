# Note Taker v4.0 :notebook::pencil2:

#### This is a web application where you can write and save notes. It uses an Express.js backend and will save and retrieve note data from a JSON file.

### To use this Application

- Clone repo on a machine running Node.js
- Navigate to local repo directory
- Install Node modules using `npm i`
- Type :pencil2:`npm start` to start app

[Click to access App](https://boiling-savannah-16450.herokuapp.com/)

### User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

### Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```