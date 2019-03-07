# Domain Logic in Express

This is a toy application to demonstrate two of many ways of
organizing domain logic in an Express application.

## Installation

Example though it may be, this application does function. To
run it, install dependencies and start it up.

```
$ npm i
$ node .
```

The application will open in Transaction Script mode by default;
to set it to Domain Model mode, set the value of `version` in
`config.js` to `'DOMAIN_MODEL'`.

## Testing

Run `jest` to test both the Transaction Script and Domain Model
versions of the application.

## Caveat Emptor

This application is a toy with an in-memory database. Please don't use
it for anything more consequential than fiddling.
