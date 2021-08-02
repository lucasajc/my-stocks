# My Stocks

## Table of Contents

* [Introduction](#introduction)
* [How to access](#how-to-access)
* [How to run it locally](#how-to-run-it-locally)
* [Useful scripts](#useful-scripts)
* [Project Structure](#project-structure)
* [License](#license)

## Introduction

*My Stocks* is a web application where the user is able to search for companies and their current stock prices. Also, the user can save companies to their list of favorites.

The project is build with the following technologies:
- React
- Redux
- TypeScript
- Jest
- React Testing Library
- Webpack
- Styled Components

Most of the commits have a tag (like `[MS-08]`) corresponding to the tasks available on [this trello board](https://trello.com/b/nDnyZxEx/my-stocks). Thus, it is possible to look for more detailed information about each feature by accessing tasks like [Search for company details](https://trello.com/c/YoqUAZ0o/3-ms-03-search-for-company-details) and [Favorite a company](https://trello.com/c/7SIEOwIm/5-ms-04-favorite-a-company).

## How to access

The project is online here: [my-stocks.netlify.app](https://my-stocks.netlify.app/)

## How to run it locally

Prerequisites:
```
node 14 (recommended: 14.15.0)
npm 6 (recommended: 6.14.8)
```

**Step 1**: Install dependencies:

```
npm install
```

**Step 2**: Create a `development.json` file inside `/env` folder with the **API URL** and the **API token**:
```[json]
{
  "API_URL": "https://cloud.iexapis.com",
  "API_TOKEN": "Tpk_this_is_an_api_token_example"
}
```

**Step 3**: Start it locally:

```
npm run start
```

**Step 4**: Access http://localhost:4000/

### Useful scripts

Generate build files:
```
npm run build
```

Run tests:
```
npm run test
```

Run test coverage:
```
npm run test:coverage
```

Run eslint:
```
npm run lint:check
```


## Project structure

The project is divided as follows:

```

└───.circleci       contains the 'config.yml' file with the pipeline steps

└───config          config files related to tests (jest) and build (webpack) are located here
|   └───jest
|   └───webpack
│
└───env             this is where you should put the development.json file in order to run the application locally. The production.json file (with the hidden token) is automatically inserted through the CI.
│
└───public          contains the index.html file and the assets (such as images and SVGs)
│
└───src             source foulder of the project
    └───app         contains the most general files of the projects, like routing, theme providers and the main component file (app.tsx)
    └───client-api  contains the API endpoints, models and fetching logic
    └───common      custom hooks and useful logic for a variety of components are located here
    └───components  contains the main reusable components of the application (like buttons, inputs)
    └───pages       folder designed to place the pages of the application, like Company Page, Favorites Page and Home Page
    └───store       folder for Redux slices and store configuration

```

## License

MIT
