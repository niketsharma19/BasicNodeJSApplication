const express = require('express');

const app = express();

app.use('/app', (req, res, next) => {
    console.log('In the Middleware!!');
    res.send('<h1>App Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another Middleware!!');
    res.send('<h1>Hello World from Express</h1>');
});

app.listen(3000);