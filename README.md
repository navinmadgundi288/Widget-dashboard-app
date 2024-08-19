# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React Dashboard/Widget Application

## Overview
This React application allows users to build a dynamic dashboard with multiple categories and widgets. Users can add, remove, and manage widgets within each category. The application provides basic functionalities like adding a widget with custom text, removing widgets, and searching through a list of all widgets.

## Features
1. *Dynamic Categories and Widgets:*
   - The dashboard is built dynamically based on a JSON structure.
   - Categories can contain multiple widgets, each with its own custom content.

2. *Widget Management:*
   - Users can add new widgets to any category.
   - Users can remove widgets from categories using a cross icon.

3. *Search Functionality:*
   - Users can search through a list of all available widgets.

## JSON Structure Example
The application is driven by a JSON structure that defines categories and widgets. Below is an example:

json
{
  "categories": [
    {
        categoryId: '1',
        categoryName: 'CSPM Executive Dashboard',
        cards: [
            {
                id: '1',
                title: 'Cloud Accounts',
                total: 2,
                data: [{ value: 2, label: 'Connected(2)' },
                { value: 2, label: 'Not Connected(2)' },],
            },
            {
                id: '2',
                title: 'Cloud Account Risk Assessment',
                total: 9659,
                data: [{ value: 1689, label: 'Failed(1689)' },
                { value: 681, label: 'Warning(681)' },
                { value: 36, label: 'Not Available(36)' },
                { value: 7253, label: 'Passed(7253)' }],
            }
        ]

    },
    {
        categoryId: '2',
        categoryName: 'CWPP Dashboard',
        cards: [
            {
                id: '1',
                title: 'Top 5 Namespace Specific Alerts',
                total: '',
                data: [],
            },
            {
                id:'2',
                title: 'Work Load Alerts',
                total: '',
                data: [],
            }
        ]
    },

]
}


## How to Use
1. *Adding a Widget:*
   - Click on the + Add Widget button within a category.
   - Fill in the Widget Name and Widget Text fields.
   - Click Add to include the widget in the selected category.

2. *Removing a Widget:*
   - Each widget has a cross (X) icon.
   - Click on the cross icon to remove the widget from the category.

3. *Searching Widgets:*
   - Use the search bar to filter through the list of all available widgets.

## Running the Application
1. Clone the repository:
   bash
   git clone [your-repository-link]
   
2. Navigate to the project directory:
   bash
   cd react-dashboard
   
3. Install dependencies:
   bash
   npm install
   
4. Start the application:
   bash
   npm start
   
   The application will be available at http://localhost:3000/.

## Project Structure
- src/
  - components/ - Contains React components for the dashboard and widgets.
  - data/ - Contains the JSON data structure for the categories and widgets.
  - App.js - Main application file.
  - index.js - Entry point for the application.

## Dependencies
- *React*: A JavaScript library for building user interfaces.
- *React-DOM*: A package for working with the DOM in React applications.
- *Other dependencies*: Mention any additional packages used (e.g., state management, styling, etc.).

## Future Enhancements
- Add functionality for persisting widget configurations in local storage.
- Implement more complex widget types with dynamic data.
