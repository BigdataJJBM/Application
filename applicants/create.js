const Applicant = require('../models/applicant')
const app = require('express')();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const create = (req, res) => {
    applicant  = req. body;
    const text = async => {
        await Applicant.addApplicant(applicant);
        res.send(Applicant.getLastApplicant());
    }
    text();
}

module.exports = {create}