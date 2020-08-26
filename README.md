# Google Books Search

## Overview

GoogleBookSearchApp is a React-based Google Books Search app that allows users to search for books via the Google Books API. Users have the option to "Save" a book, saving it to the Mongo database. Users have the option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

GoogleBookSearchApp uses React to create React components, works with helper/util functions, and utilizes React lifecycle methods to query and display books based on user searches. Node, Express, and MongoDB are also used so that users can save books to review or purchase later. Bootstrap is used for the styling.

`Go check it out :  ` https://google--books-search.herokuapp.com/

### Instructions

This application requires at minimum 2 pages, check out the following mockup images for each page:

`Search` - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

`Saved` - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

1. Start by using the 07-Ins_Mern example as a base for your application.
2. Add code to connect to a MongoDB database named googlebooks using the mongoose npm package.
3. Using mongoose, then create a Book schema.
4. At a minimum, books should have each of the following fields:
 - `title`  Title of the book from the Google Books API
 - `authors`  The books's author(s) as returned from the Google Books API
 - `description`  The book's description as returned from the Google Books API
 - `image`  The Book's thumbnail image as returned from the Google Books API
 - `link`  The Book's information link as returned from the Google Books API
 - Creating documents in your books collection similar to the following:
 
 `{
    authors: ["Suzanne Collins"]
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a       live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger           sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
    title: "The Hunger Games"
}`

5. Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show your React components without changing the route within Express.
- The layout should include at least two React Components for each page Search and Saved.
- Feel free to try out alternative CSS framework to Bootstrap.

6. Add the following Express routes for your app:
- /api/books (get) - Should return all saved books as JSON.
- /api/books (post) - Will be used to save a new book to the database.
- /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
- * (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.

Deploy your application to Heroku once complete. You must use Create React App and current versions of React and React-Router-Dom for this assignment.

### Technologies Used
- Bootstrap
- CSS
- React
- ES6
- Express.js
- Node.js
- NPM packages: React-router, Express, Axios
- MongoDB


### Authors
  - Kanyarut Pornamnuay
  <br><a target="_blank" rel="nofollow" href="https://github.com/benbaba2525">Visit My Github Profile</a>
  <br><a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/My-Portfolio/">Visit My Portfolio</a>


### Acknowledgments
  - UCLA Coding Bootcamp   <a target="_blank" rel="nofollow" href="https://bootcamp.uclaextension.edu/coding/">Visit UCLA Coding Bootcamp</a>

### Helpful Links
- <a target="_blank" rel="nofollow" href="https://reactrouter.com/">React Router</a>
- <a target="_blank" rel="nofollow" href="https://create-react-app.dev/docs/proxying-api-requests-in-development/">React.js</a>
- <a target="_blank" rel="nofollow" href="https://github.com/facebook/create-react-app">Proxying API Requests in Development</a>
- <a target="_blank" rel="nofollow" href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">React Lifecycle Methods Diagram</a>
- <a target="_blank" rel="nofollow" href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">Presentation vs Container Components</a>



