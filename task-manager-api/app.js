const express = require('express');
const {BASE} = require('./utils/config').ROUTES;
const {DEFAULT_PORT} = require('./utils/config');

const app = express();

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));
app.use(require('./utils/middlewares/content'));
app.use(BASE,require('./routes/user'));

// 404 Not found
app.use(require('./utils/middlewares/404'));

const serverObj = app.listen(process.env.PORT || DEFAULT_PORT , err => {

    if (err)
        console.log(err);

    else
        console.log(serverObj.address().port);
})