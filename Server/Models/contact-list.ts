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

const Model = mongoose.model("Contact", ContactListSchema);
export default Model;