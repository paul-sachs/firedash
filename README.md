# **Reforge Boilerplate**

This is a react / redux / react-redux-provide / redux-saga boilerplate designed for to be the basis of your front-end application.

### Providers
> A provider is a plain object composed of a handful of different properties. These properties are ? designed to work together to represent and manipulate the state of anything within your application. You can also easily replicate the state of any provider instance's store to some database and/or to other clients. Each provider instance is given its own Redux store which is automatically created based on these properties.

Providers are an way organizing redux stores in a predictable way. They also effortless allow you to connect your components to your state.

There are a number of canned providers on npm including: provide-array, provide-map, provide-page, provide-history and more than can save you precious development time and boilerplate actions and reducers.

### Sagas

> An alternative Side Effects middleware (aka Asynchronous Actions) for Redux applications. Instead of dispatching Thunks which get handled by the redux-thunk middleware, you create Sagas to gather all your Side Effects logic in a central place.

Sagas allow you to write daemons that respond to certain actions and perform async operations on them. (With a nice synchronous looking generator api.) In addition to easily handling async actions they are the best place to intercept any action initiated by the user. ie: I user clicks a button to load more posts. A saga should intercept the action, and fire off the async request to retrieve more posts, it can also fire off an action to start a loading spinner, handle the return of the promise, fire an action to the reducer with the new posts, and fire an action to disable the spinner. This makes it very easy to extend a single user interaction into a flow of redux actions. It also provides a central place to look for user interactions. No longer is a user interactions logic inside a reducer sometimes and a thunk another.

### Actions
Flux standard actions should be used see [acidlite/flux-standard-actions](https://github.com/acdlite/flux-standard-action) on github. Feel free to use something like [acdlite/redux-actions](https://github.com/acdlite/redux-actions) if you're creating a lot of actions.

### Kotatsu
Kotatsu is a layer on top of webpack that has sane defaults, it works just like the webpack you know and love, but provides better ux for the developer. See scripts/start.js

### PostCSS
A much more javascript friendly css processing system. Allows us to share variables between JS and scss easily. Provides much more powerful plugins than what is capable in scss, for specific use cases. All css is compiled during build, no more running sass on the server.

### Tape
Test anything protocol framework for harness free unit testing. Test should live directly alongside the modules they are testing. (files named \*.test.js will be matched) They should be atomic. Full es6 support in tests.

### Eslint
See .eslintrc

### Babel
Next gen javascript, including generators. see .babelrc

### Dotenv
Use envionment variables in your scripts as well as your compiled front end files. Env files should not be committed, but rather stored in the environment. A .env file is gitignored for use in your development environment. (We do not commit this file because we would like to fail in a misconfigured env, not fall back to development defaults.)

### Pluginator.js
Script to post the url to your applications static assets to a pluginator endpoint of your choosing (see .env.example)
