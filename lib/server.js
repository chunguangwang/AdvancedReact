import express from 'express';
import config from './config';
// const express = require('express');
// const config = require('./config');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
    res.render('index', { answer:  4235});
})

app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}`);
});