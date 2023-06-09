# E-commerce Front-end Boilerplate



Welcome to the E-commerce Front-end Boilerplate! This project was created to provide you with a solid foundation for building your own E-commerce website. It comes fully equipped with essential features and functionality, allowing you to focus on customizing and expanding your application.


## Technologies used

* React.js
* Redux-Toolkit
* React-router-dom
* Ant Design



## Features

* Authentication and Registration: Easily set up user authentication and registration functionalities, ensuring secure access to your E-commerce platform.
* Shopping Cart: Implement a robust shopping cart system, enabling users to add items, manage quantities, and proceed to checkout effortlessly.
* Admin Panel: Gain administrative control with an intuitive admin page, where you can manage products, perform CRUD operations (create, read, update, delete), and more.

### Installing


* git clone https://github.com/sergey-antonyan/E-commerce-React.git 
cd .. "your directory name"

* Install the necessary dependencies using npm or yarn.
* Customize the design and layout of your E-commerce site according to your needs.
* Configure the authentication system and set up user roles and permissions.
* Integrate with your preferred database solution to store and retrieve product information.
* Deploy your front-end application to a hosting provider of your choice.

Feel free to explore the codebase and make any modifications to suit your specific requirements.

### Contributions

* Contributions, bug reports, and feature requests are always welcome! If you encounter any issues or have suggestions for improvement, please open an issue on this repository.



# E-commerce Online Shop - Backend

## Description

This project is designed to provide a comprehensive backend solution for launching your E-commerce online shop. It comes equipped with a feature-rich boilerplate that is fully prepared to handle a variety of essential backend tasks, ensuring a smooth and secure experience for your customers.

Furthermore, the boilerplate offers a powerful CRUD (Create, Read, Update, Delete) functionality, enabling you to effortlessly manage your inventory, product listings, and customer information. This facilitates easy additions, updates, and removals of products, ensuring your online shop remains up-to-date with the latest offerings.

## Features

* User registration and login
* Authentication via JWT
* Email confirmation
* CRUD for users, categories, products, shoping_cart
* PostgreSQL database
* Seeding

### Installing

```
git clone https://github.com/sergey-antonyan/E-commerce_backend
npm install
```

## Getting Started

To test the application

* Register on https://www.postgresql.org/download/
* Create your free shared database and choose a username and password for it
* Add your username, password and database to the config.json file
* Example 
    "username": "postgres",  
    "password": "test1234",
    "database": "my_database",
* Make a temporary gmail account for testing purposes
* Enable 2 factor authentication and click on app passwords (article: https://mailtrap.io/blog/send-emails-with-nodejs/)
* Add your email and password for the app in the .env file
* Example
MAIL='youremail@gmail.com'
PASS='test123456'
* Choose a random string as JWT secret or generate it in your terminal
```
node
console.log(crypto.randomBytes(64).toString('hex'));
```
* Copy it and place in in your .env file
* Example
  SECRET="yourrandomlygeneratedsecret"
* Start the application
```
nodemon server.js
```
* Register via http://localhost:3000/register with username,,firstname, lastname, email, and password in the body as JSON format via Postman or any alternatives
* If successful, you should get a verification email
* Email link should look like this - http://localhost:5000/verify/token
* Opening the link will change your username confirmed field from 0 to 1 and show confirmed message in the response
* Login via http://localhost:3000/buyonline with the same email and password
* Your response should have a JSON token
* Place it inside the Authentication tab Bearer Token
* Make a request to http://localhost:3000/users
* If you get 200 OK and {"users": []} as a result, everything was successful
* From there you can edit the app based on your needs
* If you want to seed your post database with some random information, run node post_seed.js in the seeds folder, click "y" to delete all previous records or anything else to just add data without deleting anything
## Authors

Contributors names and contact info
Feel free to contribute to the project

