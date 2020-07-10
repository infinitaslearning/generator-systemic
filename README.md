# generator-systemic 
=======
> A generator for a systemic microservice

## Installation

First, install [Yeoman](http://yeoman.io) and generator-systemic using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
# Intall yeoman command
npm install -g yo
# We need to tell where the package is
npm set registry https://pkgs.dev.azure.com/infinitas/_packaging/Infinitas/npm/registry/ 
# Install generator
npm install -g @infinitas/generator-systemic
# Recover default npm registry
npm config set registry https://registry.npmjs.org/
```

Then generate your new project:

```bash
mkdir my-service
cd my-service
yo @infinitas/systemic
```

## What you can find in this generator

- [Systemic framework](https://www.npmjs.com/package/systemic) - A minimal dependency injection library.
- Basic express and systemic components
- Azure devops configuration
- [Docker](https://www.docker.com/) image for your application
- Docker folder with docker-compose.yaml to run your app in a CI environment
- [Jest](https://jestjs.io/) tests - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- Open API Docs with [express-jsdoc-swagger](https://www.npmjs.com/package/express-jsdoc-swagger) - Swagger OpenAPI 3.x generator
- [.helm](https://helm.sh/) templates to deploy in kubernetes
- [commitlint](https://commitlint.js.org/#/) - Lint commit messages.
- Hook validation with [Husky](https://www.npmjs.com/package/husky) - Git hooks made easy. Husky can prevent bad git commit, git push and more 🐶 woof!


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

ISC © [Guidesmiths Ltd]()
