const Applicant = require('../models/applicant')

const update = (req, res) => {
    const text = async => {
        res.send(Applicant.updateApplicant(req.params.full_name))
    }
}

module.exports = {update}