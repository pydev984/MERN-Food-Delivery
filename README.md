# Chicken Tinder ![alt text](https://github.com/hkryucr/mern-ct/blob/master/frontend/public/chicken_logo_edited.png)

A single page designed to help a group decide on a venue for their next gathering. 
Each user can vote on each venue offered to the group (based on location and filters).

[Chicken Tinder Live](https://lit-atoll-81167.herokuapp.com/#/)


## Features

In Chicken Tinder, users can create a group and select an offer of venues based on location and eventually filters. 
The creator can set a deadline for the members to vote.

![alt text](https://github.com/hkryucr/mern-ct/blob/master/frontend/public/create_group.gif "Create a group")

All group members can then log in to vote on each one of the pre-selected venues. 

![alt text](https://github.com/hkryucr/mern-ct/blob/master/frontend/public/vote.png "Vote for each venue")

Once all the group members have voted or the deadline is reached, the 3 most voted venues are displayed. 

![alt text](https://github.com/hkryucr/mern-ct/blob/master/frontend/public/results.png "Show vote results")

### User authentication

Users can sign up or log in to use the application.
Users can also log in through a demo account.
User credentials are securely hashed, salted, and stored with Bcrypt.

CODE

### Businesses

The businesses markers are displayed on the map using the Yelp API.
The list of preselected businesses is updated as the user zooms in / out, changes the map boundaries or select an area / neighborhood via the search bar.

CODE

### Votes

CODE

## Technologies

Chicken Tinder is built with the MERN stack (Mongo DB, Express, React, Node.js).

### Front-end

#### React
The Rails backend API is connected to a React frontend to efficiently render to the virtual DOM.

#### Redux
Redux manages the front-end state. When the database information is retrieved, the Redux state is updated first and re-renders the appropriate React components.

### Back-end

#### Express
Express is the back-end framework used to query the database.

#### Mongo DB
Mongo is a non SQL database used to store users, businesses and associated datas (groups and votes).


## Technical Challenges



## The Team

* [Henry Ryu](https://github.com/hkryucr)
* [Chris Thompson](https://github.com/ChrisThompsonTX)
* [Neil Desai](https://github.com/nsdesai1)
* [Arnaud Cognard](https://github.com/Arno-co)