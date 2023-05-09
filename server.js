#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js"
import express from "express"
import minimist from "minimist"


const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/app', (req, res) => {
    res.status(200).send('200 OK');
})

app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
})

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(rpsls());
})

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.query.move));
})

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.move));
})

app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.body.move));
})

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.body.move));
})

app.get('/app/rps/play/:move', (req, res) => {
    res.status(200).send(rps(req.params.move));
})

app.get('/app/rpsls/play/:move', (req, res) => {
    res.status(200).send(rpsls(req.params.move));
})

app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})