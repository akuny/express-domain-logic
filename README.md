# Domain Logic in Express

This application demonstrates two of many ways of
organizing domain logic in an Express server.

## Installation

<<<<<<< HEAD
To run it, install dependencies and start it up.
=======
You can run this app, for what it's worth:
>>>>>>> d5afbfafc2a2717ae9cbab65f5db42d056952344

```
npm i
node .
```

<<<<<<< HEAD
The application will open in Transaction Script Phase 2 mode by default;
to change it to Domain Model mode, set the value of `version` in
`config.js` to `'DOMAIN_MODEL'`.
=======
The application will open in Transaction Script Phase 1 mode by default;
to set it to Domain Model mode, change the value of `version` in
`config.js`.
>>>>>>> d5afbfafc2a2717ae9cbab65f5db42d056952344

Since this application is fundamentally academic, testing might be of
greater interest than running it.

## Testing

Run `jest` to test the Transaction Script and Domain Model
versions of the application.

## Caveat Emptor

This application is a toy with an in-memory database. Please don't use
it for anything more consequential than fiddling.
