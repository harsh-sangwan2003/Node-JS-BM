const express = require('express');
const cron = require('node-cron');
const moment = require('moment');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use("*", cors());
app.get("/", (req, res) => {
    console.log("API is up & running");
})

app.listen(8080, () => {
    console.log("API is up & running");
})

cron.schedule('* * * * * *', () => {

    console.log('running the task in every second', moment().format('DD MM YYYY hh:mm::ss'));
})

// step value
cron.schedule('*/10 * * * * *', () => {

    console.log('running the task after every 10 sec', moment().format('DD MM YYYY hh:mm::ss'));
})

// range
cron.schedule('5-10 * * * * *', () => {

    console.log('running the task after every 10 sec', moment().format('DD MM YYYY hh:mm::ss'));
})

// multiple values
cron.schedule('5,10,15,25,35 * * * * *', () => {

    console.log('running the task after every 10 sec', moment().format('DD MM YYYY hh:mm::ss'));
})

cron.schedule('0 9 15 Aug *', () => {

    // send email code
}, {
    timezone: 'Asia/Kolkata'
})