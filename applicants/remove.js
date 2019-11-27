const Applicant = require('../models/applicant')

const remove = (req, res) => {
    const text = async => {
        res.json({
            data: await Applicant.removeApplicant(req.params.full_name)
        })
    }
    text();
}

module.exports = {remove}