# Taste of Twitter

Launch <a href='https://twitter-showcase-aaron.onrender.com/'>here</a>

<img width="1709" alt="Screenshot 2023-01-31 at 8 24 49 PM" src="https://user-images.githubusercontent.com/108595340/215956988-8c7ef6b1-bd0e-4694-bc2b-411f0f701ead.png">

<img width="2252" alt="Screenshot 2023-10-07 at 2 49 05 PM" src="https://github.com/AaronAWB/Taste_of_Twitter/assets/108595340/fc6d82e3-55a0-44d1-b14b-752574d4e999">

Users can search for recent tweets by a specific Twitter user or all recent tweets by keyword.

<img width="2259" alt="Screenshot 2023-10-07 at 2 47 54 PM" src="https://github.com/AaronAWB/Taste_of_Twitter/assets/108595340/49c820bd-ab4b-4ce1-a247-1390ef991e1f">

Users can return a random recent tweet from one of five pre-selected Twitter users: LeVar Burton, Philip Pullman, Seattle Sounders FC, Andrei Neagoie, and Jon Stewart.

## Summary

Taste of Twitter was a capstone project for the Software Development Mastermind program and my first full-stack web application.

The front-end is a client built using React and styled using Bootstrap 5 that allows the user to navigate between pages using the React Router library. The user can search all recent tweets by user handle or keyword - or display a tweet from one of five pre-selected twitter users - pulled from Twitter API v1.1. API calls are routed through a Python-based internal API built using the Flask framework at the back-end.

**Note:** Twitter API v1.1 was fully deprecated in September, 2023. This project has been updated to use Twitter API v2.0. Due to recent changes in developer access to the Twitter API, the random Tweet feature is now limited to 10 requests every 15 minutes. If you receive an error message, please wait 15 minutes and try again. 10/7/2023.

## Skills Developed

* React.js
* The React Router library
* Python
* The Flask Python framework
* REST API authentication, headers, queries, and CORS policy parameters
* Credential masking using Python dotenv

## Author

Aaron Brinckerhoff - Full Stack Software Developer | <a href='https://www.linkedin.com/in/aaron-brinckerhoff-6b9a5340/'>LinkedIn</a> | <a href='https://www.aaronbrinckerhoff.dev/'>Website</a>