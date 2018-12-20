# OPERAS Metrics Website
[![Build Status](https://travis-ci.org/hirmeos/metrics_portal.svg?branch=master)](https://travis-ci.org/hirmeos/metrics_portal) [![Dependencies](https://img.shields.io/david/hirmeos/metrics_portal.svg)](https://david-dm.org/hirmeos/metrics_portal) [![DevDependencies](https://img.shields.io/david/dev/hirmeos/metrics_portal.svg)](https://david-dm.org/hirmeos/metrics_portal?type=dev)

## Usage
First we need to define the URLs of the APIs in `var.env`; a template can be found in `var.env.example`.

### Production
Using docker:
```bash
docker-compose build
docker-compose up -d
```

Or manually:
```bash
npm install
npm run build
```

### Development
Using docker:
```bash
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up -d
```

Or manually:
```bash
npm install
npm start
```

### Testing
Tests are automatically run upon build, however they can also be run manually:
```bash
npm run test:all
```

## Code consistency
In order to keep a consitent coding style, not just aesthetically, but also syntactically, two libraries are being used: [eslint](https://eslint.org/) and [prettier](https://prettier.io/).

Both libraries can be run using [lint-staged](https://www.npmjs.com/package/lint-staged) before a commit:
```bash
npm run precommit
```
Or individually:
```bash
npm run lint
```
```bash
npm run prettier
```

Eslint's configuration is defined in `.eslintrc.js`, prettier's in `.prettierrc`.

NB. For development purposes it is recommended to install all dependencies (`npm install`) - husky will automatically configure a hook to trigger `npm run precommit` automatically upon commit. However, the app should still be run in a container, to ensure that it works in an isolated environment.

## Further reading
The Metrics Broker is based in [Ant Design Pro 2.0](https://pro.ant.design/), a React UI library powered by [UmiJS](https://umijs.org/) - in order to understand the architecture of the code it is recommended that you go through both documentations.
