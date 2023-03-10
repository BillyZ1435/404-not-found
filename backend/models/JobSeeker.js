const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobseekerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    uid: { type: Schema.Types.ObjectId, ref: 'User' },
    phoneNumber: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    workExperience: {
        type: Array,
        of: new Schema({
            company: String,
            jobTitle: String,
            startDate: String,
            endDate: String,
            description: String
        }),
        required: false
    },
    education: {
        type: Array,
        of: new Schema({
            school: String,
            program: String,
            gradDate: String
        }),
        required: false
    },
    appliedPost: [{
        postId: String,
        status: Number,
        assesmentLink: String,
        interviewDate: Date
    }],
    currStatus: {
        type: String,
        required: false
    },
}
);

const JobSeeker = mongoose.model('JobSeekers', jobseekerSchema)

module.exports = JobSeeker;
