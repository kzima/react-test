# UQ Library

## Installing and Running

To start, make sure you're in the `UQLibrary` folder in command-line.

```sh
# Install Node Modules
npm install

# Start the Webpack Server for development
npm start
```

> The server will be available at localhost:3006

## Compiling for production

```sh
npm run build
```
## Testing

```sh
# If you want to run a single test
npm test

# If you want to run test in a watch mode
npm run test:watch
```
# API Methods

The api methods used are:
`/computers.json`
`/library_hours.json`

*Note:*
This app is using mocks placed in `data` folder and it is hardcoded for simplicity.
TODO: add environment support to dynamically change request url. 

# SEO concerns
Originally SPAs are not suitable for SEO needs. Since a single page application loads data dynamically and creates a  markup, usually search robots can’t see and index such content. As a result, a single page app is indexed as an empty page.
Server rendering made possible via ReactDOMServer.renderToString. The visitor will receive the already rendered page of markup, which the React application will detect once it has downloaded and run.
see more [here](http://redux.js.org/docs/recipes/ServerRendering.html);

# WCAG 2.0 AA compliance considerations
## TODO:
- add Aria labels
- Every page has an appropriate/meaningful <title></title>
- add secondary navigation

[WCAG Level A Checklist](https://github.com/twg/accessibility/wiki/WCAG-Level-A-Checklist)
[WCAG Level AA Checklist](https://github.com/twg/accessibility/wiki/WCAG-Level-AA-Checklist)

# Roadmap
- refactor to use redux
- add environment and config files for easy deployments
- add gulp script to deploy to AWS CDN server
- add new feature for a user to be able to filter libraries by name (est: 30 mins)