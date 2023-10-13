import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    } ,
    avatar:{
        type: String,
        default: "https://lh3.googleusercontent.com/a/ACg8ocKW3i6ABypYvE5o4zfq2Db6KfO1aA67kCbykDkWi8QYxg=s96-c"
      },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;