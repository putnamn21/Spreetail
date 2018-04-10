# Spreetail Task Manager

Up to date versions of node and yarn are required for this project to run

### Instructions
* Clone Repo
* Run Yarn Install
* Open Two Terminals
* Run `yarn start-server` in one and `yarn start-client` in another
* Open a couple browser windows and connect to `localhost:8080`

### Project Overview

Server and multiple clients run and stay in sync by dispatching common Redux actions, that are propagated with socket.io.

When a client dispatches a specific action, it immediately reflected in the clients state, and passes to the server. The server runs the action and then emits the updated state to all connected clients.

### Project Packages

* [React](https://reactjs.org/)
* [Material UI 1.0](https://material-ui-next.com)
* [Redux](https://redux.js.org/)
* [Redux Actions](https://redux-actions.js.org/docs/introduction/Motivation.html)
* [Immutability Helper](https://github.com/kolodny/immutability-helper)
* [Socket.io](https://socket.io/)
