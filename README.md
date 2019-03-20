# Domain Logic in Express

This application demonstrates two of many ways of
organizing domain logic in an Express server.

## Installation

To run it, install dependencies and start it up.

```
npm i
node .
```

The application will open in Transaction Script Phase 2 mode by default;
to change it to Domain Model mode, set the value of `version` in
`config.js` to `'DOMAIN_MODEL'`.

Since this application is fundamentally academic, testing might be of
greater interest than running it.

## Testing

Run `jest` to test both the Transaction Script and Domain Model
versions of the application.

## Caveat Emptor

This application is a toy with an in-memory database. Please don't use
it for anything more consequential than fiddling.
