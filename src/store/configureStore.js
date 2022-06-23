let ES6Conversion;

if (process.env.NODE_ENV === 'production') {
  ES6Conversion = require('./configureStore.prod');
} else {
  ES6Conversion = require('./configureStore.dev');
}

export default ES6Conversion;