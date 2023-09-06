JavaScript Chess Game with PHP User System Integration
======================================================

Welcome to the **JavaScript Chess project** with **PHP user system integration**! This project enables you to play chess on the client side using JavaScript, while also incorporating a basic PHP user system for login, signup, and simple profile and friends functionalities. Please note that this chess game is designed for single-player mode against a random-moving bot.

Table of Contents
-----------------

*   [Features](#features)
*   [Prerequisites](#prerequisites)
*   [Installation](#installation)
*   [Usage](#usage)
*   [Contributing](#contributing)
*   [License](#license)

Features
--------

*   Play chess against a bot that makes random moves.
*   User system integration with PHP for login and signup.
*   Basic profile and friends functionality.

Prerequisites
-------------

Before you begin, ensure you have the following installed:

*   A web server with PHP support (e.g., Apache, Nginx).
*   MySQL database server (for user system).
*   A compatible web browser.

Installation
------------

1.  **Clone the repository**:
    
    ```bashCopy code
    
    `git clone https://github.com/alex-kostuyk/myChessProject.git`
    

    ```
    
2.  Create a new MySQL database and **import the `database.sql` script** to set up the required tables for the user system.
    
3.  Modify the `sqlConnect.php` file in the `php` directory with your MySQL database connection details:
    
   ```phpCopy code
    
    `<?php
          $servername = "your_servername";
          $username = "your_username";
          $password = "your_password";
          $dbname = "your_database_name";
     ?>`

  ```
    
4.  **Upload the entire project to your web server**.
    

Usage
-----

1.  Open your web browser and **navigate to the project's URL http://my-chess.online/
    
2.  **Register a new account or log in** with an existing account.
    
3.  After logging in, you can access your **profile**, view your **friends**, and **play the chess game against the bot**.
    
4.  To play a move in the chess game, **click on a piece** you want to move and then **click on a valid destination square**.
    

Contributing
------------

Contributions to this project are welcome! If you'd like to contribute, follow these steps:

1.  **Fork the repository**.
    
2.  Create a new branch for your changes:
    
    ```bashCopy code
    
    `git checkout -b feature/your-feature-name`

    ```
    
3.  **Make your changes** to the codebase.
    
4.  **Commit and push your changes** to your forked repository.
    
5.  Create a **pull request targeting the `main` branch** of the original repository.
    

License
-------

This project is licensed under the **MIT License**.

* * *

Enjoy playing chess and experimenting with the integration of PHP user functionalities! If you have any questions or suggestions, feel free to **open an issue or make a pull request**. Happy coding!
