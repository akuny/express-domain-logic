# Domain Logic in Express

This application demonstrates two of many ways of
organizing domain logic in an Express server.

## Installation

You can run this app, for what it's worth:

```
npm i
node .
```

The application will open in Transaction Script Phase 1 mode by default;
to set it to Domain Model mode, change the value of `version` in
`config.js`.

Since this application is fundamentally academic, testing might be of
greater interest than running it.

## Testing

Run `jest` to test the Transaction Script and Domain Model
versions of the application.

## Caveat Emptor

This application is a toy with an in-memory database. Please don't use
it for anything more consequential than fiddling.
