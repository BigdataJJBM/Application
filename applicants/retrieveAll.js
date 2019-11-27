const Applicant = require('../models/applicant')

const retrieve = (req, res) => {
    const test = async => {
        res.json({
            data : await Applicant.getApplicants()
        })
    }
    test();
}

module.exports = {retrieve}