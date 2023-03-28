# React Cookbook
The goal is to create a single page React web-app that will consume data from a remote API hosted by Contentful.

## Description
The page should show a list of recipes from the Contentful space. The user can search for a recipe and view the details. 

### Short
The following tasks had to be accomplished:
- create a content model and fill it with content in Contentful API
- fetch data with the Contentful client
- implement a search function for the recipe title
- use React routing to navigate and NOT reload the page on content change

## Learnings
- Headless CMS
- Contentful client getEntries() and getEntry()
- Routes, Route, Link and NavLink from react-router-dom
- pass parameters to components with the useParams hook
- persist search term with the useRef hook
- navigate to a specific component with the useNavigate hook
- React useEffect, useState hooks

## Technologies
- Headless CMS (Contentful API)
- React
- Material UI
- Bootstrap
- HTML
- CSS

## Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
