import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from './testData'
// const express = require('express');
// const config = require('./config');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.get('/', async (req, res) => {
    const initialContent = await serverRender();
    res.render('index', { answer:  4235, initialContent: initialContent});
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}`);
});