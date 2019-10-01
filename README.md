# Character Manager

- Repository : `character-manager`
- Time : 3 days
- Team : group of 2 or 3 with your godmother-father/pioupiou

## Objectives 

- Consolidate Javascript knowledge, especially Async/await
- Learn Typescript
- Use an API with HTTP requests

## The job

A client Comics fan would like to manage his favorites characters in a dashboard. He contacts you to create an app able to view, edit, create all his favorites characters. 

In this project, you will use the [Character Database API](https://character-database.becode.xyz/) to make a Character Manager.  
  
This is a frontend project, you have to care about the appearance of your application and create a custom template.

### Characters list page

This page will be the first one displayed when you open the app. Display the list of all the characters contained in the database. You can use a table or a list of cards to display them, at your convenience.

Make sure the following feature shoud be present for each character:

* Its name
* Its short description. Be warned that the `description` field is in Markdown and, of course, we want to display it as HTML in your application.
* Its image. **Hint**: [Data URIs](https://css-tricks.com/data-uris/)
* A way to open the corresponding Character
* A way to open the Character edition
* A way to delete the character (you **must** add some kind of confirmation, "Are you sure do you want to delete this character ?")

This page should also contain a button to create a new character.

### Single character 

This page should display a full description of the character. Be warned that the `description` field is in Markdown and, of course, we want to display it as HTML in your application.

### Character creation

When we click on the character creation button in the Characters list page that should redirect to this page. This page should contain a form with an input for each of the following fields:

* `name`
* `shortDescription`
* `image` **Hint**: [Reading local files in JavaScript](https://www.html5rocks.com/en/tutorials/file/dndfiles/)
* `description` (you can just let the user enter Markdown but a Wysiwyg editor generating Markdown would be much more cool)

When the form is completed create the character in the API and redirect to the character list page.

### Character edition

This part should be similar to the Character creation page except it allows to edit an existing character.
button to delete characters. It should display a modal asking for confirmation.


## Constraints

* You have to use [TypeScript](https://www.typescriptlang.org/). A `.ts` file can understand Javascript Vanilla, but we ask you to use the TypeScript's features as :
	- Type annotations
	- Functions features
	- Interfaces
	- Classes features
	- ...
* Your website must be deployed somewhere. We recommend [Github Pages](https://pages.github.com) or [Netlify](https://www.netlify.com), two great (and free) solutions.

## Tips

### HTTP requests

This project ask you to perform HTTP Request. It is recommended to use [axios](https://github.com/axios/axios) to do so you can install it with:

```bash
npm install --save axios
```

Then to import it:

```javascript
const axios = require('axios');
```
Using axios it is strongly recommended to use the [async/await](https://javascript.info/async-await) syntax when working with asynchronous operations.

### Postman

To test APIs rapidly before coding you should use [Postman](https://www.getpostman.com/). 
To start using it today with the Character Database API you can use [this Postman collection](https://static.becode.xyz/character-database/characters-database.postman_collection.json).



## Let's go to save the world

![](https://media.giphy.com/media/rf5TGw330sy88/giphy.gif)
