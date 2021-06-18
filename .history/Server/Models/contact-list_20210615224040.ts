import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactListSchema = new Schema
    ({
        contactName: String,
        contactNumber: String,
        contactEmail: String
    },
        {
         collection: "contact_list"
        });

const Model = mongoose.model("contact_list", ContactListSchema);
export default Model;