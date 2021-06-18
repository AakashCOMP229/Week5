import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // Schema alias
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
    ({
        username: String,
        password: String,
        emailAddress: String,
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
            collection: "users"
        });


UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("users", UserSchema as PassportLocalSchema);

declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        username: String,
        password: String,
        emailAddress: String
    }
}
export default Model;