import mongoose from 'mongoose';

// userSchema for storing users - sfu students
// they will have unique id's given by the mongo db
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    tags: {
        type: [String],
        default: ['sfu']
    }
});

const User = mongoose.model('user', userSchema);
export default User;