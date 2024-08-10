#Online-Library-with-BackboneJS

Welcome to the Books world, a dynamic web application built using HTML, CSS, JavaScript, Backbone.js. This application offers a catalog of books categorized by genres like Science Fiction, Romance, Horror, and Sports, with detailed views for each book.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Contributing](#contributing) 
- [License](#license)

## Features

- **Dynamic Categories**: Books are categorized into different genres, allowing for easy navigation.
- **Book Details**: Clicking on a book displays detailed information about the book, including thumbnails and descriptions.
- **Responsive Design**: The application is built to be responsive, providing a seamless experience on both desktop and mobile devices.

## Technologies

- **HTML** and **CSS**: For structuring and styling the application.
- **JavaScript**: For dynamic interactions on the client side.
- **Backbone.js**: Utilized for structured client-side applications.
- **Underscore.js**
- **jQuery**

## Setup

To get this project running on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Set up a local server:
   - **Python** (if installed): Run `python -m http.server` (for Python 3.x) or `python -m SimpleHTTPServer` (for Python 2.x) in the project directory.
   - **Node.js**:
     - Install http-server globally via npm: `npm install -g http-server`
     - Start the server by running `http-server` in the project directory.
   - **Visual Studio Code**:
     - Install the Live Server extension.
     - Right-click `index.html` and select "Open with Live Server".
3. Visit `http://localhost:8000` (or the URL provided by your server) in your web browser.

## Project Structure

- `api/` - Contains JSON files that simulate API responses.
- `css/`
  - `main.css` - Contains the main stylesheet for the application.
- `js/`
  - `bootstrap.js` - Initializes the application modules.
  - `main.js` - Entry point for JavaScript execution.
  - `models/`
    - `Book.js` - Backbone model for a single book.
    - `Books.js` - Backbone collection for a list of books.
  - `routers/`
    - `Router.js` - Backbone router for handling URL routes.
  - `views/`
    - `BookDetail.js` - Backbone view for displaying a single book's details.
    - `BooksList.js` - Backbone view for displaying the list of books.
- `index.html` - The main HTML file.
- `LICENSE` - The license file.
- `readme.md` - This README file.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or improvements, feel free to create an issue or submit a pull request. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them with clear and descriptive messages.
4. Push your changes to your forked repository:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.