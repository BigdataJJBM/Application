const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;
const createApplicant = require('./applicants/create')
const updateApplicant = require('./applicants/update')
const retrieveApplicants = require('./applicants/retrieveAll')
const removeApplicant = require('./applicants/remove')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/applicants/create', (req, res) => {
  createApplicant.create(req, res);
})
app.put('/applicants/:full_name', (req, res) => {
  updateApplicant.update(req, res);
})
app.get('/applicants', (req, res) => {
  retrieveApplicants.retrieve(req, res);
})
app.delete('./applicants/:full_name', (req, res) => {
  removeApplicant.remove(req, res);
})

app.use(express.static('styles'));

http.listen(port, function () {
  console.log('listening on *: ' + port);
});