#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js"
import express from "express"
import minimist from "minimist"

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/app', (request, respond) => {
    respond.status(200).send('200 OK');
})

app.get('/app/rps', (request, respond) => {
    respond.status(200).send(rps());
})

app.get('/app/rpsls', (request, respond) => {
    respond.status(200).send(rpsls());
})

app.get('/app/rps/play', (request, respond) => {
    respond.status(200).send(rps(request.query.shot));
})

app.get('/app/rpsls/play', (request, respond) => {
    respond.status(200).send(rpsls(request.query.shot));
})

app.post('/app/rps/play', (request, respond) => {
    respond.status(200).send(rps(request.body.shot));
})

app.post('/app/rpsls/play', (request, respond) => {
    respond.status(200).send(rpsls(request.body.shot));
})


app.get('/app/rps/play/:shot', (request, respond) => {
    respond.status(200).send(rps(request.params.shot));
})

app.get('/app/rpsls/play/:shot', (request, respond) => {
    respond.status(200).send(rpsls(request.params.shot));
})

app.get('*', (request, respond) => {
    respond.status(404).send('404 NOT FOUND');
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})