import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema
    ({
        username: String,
        password: String,
        email: String,
    },
        {
            collection: "user"
        });
