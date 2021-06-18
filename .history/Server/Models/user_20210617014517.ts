import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // Schema alias
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
    ({
        username: String,
        password: String,
        email: String,
        created:
        {
            type: Date,
            default: Date.now()
        },
        updated:
        {
            type: Date,
            default: Date.now()
        }
    },
        {
            collection: "user"
        });

const Model = mongoose.model("user", UserSchema);
export default Model;