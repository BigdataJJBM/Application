const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    full_name: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    contact_number: { type: String, required: true }
});

Schema.statics.addApplicant = async function (applicant) {
    var Applicant = new this(applicant);
    var result = await Applicant.save(applicant);
    return result;
}

Schema.statics.getApplicants = async function () {
    return await this.find();
}

Schema.statics.getLastApplicant = async function () {
    return await this.findOne().sort({ _id: -1 }).limit(1);
}

Schema.statics.getApplicantByUsername = async function (full_name) {
    return await this.findOne({ "full_name": full_name });
}

Schema.statics.updateApplicant = async function (full_name) {
    return await this.updateOne({ "full_name": full_name }, {$set : {"comment" : "confirmed"}});
}

Schema.statics.removeApplicant = async function (full_name) {
    return await this.removeOne({ "full_name": full_name });
}

module.exports = mongoose.model('applicant', Applicant);