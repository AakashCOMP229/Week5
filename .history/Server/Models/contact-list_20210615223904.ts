import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactListSchema = new Schema
    ({
    contactName: String,
    contactNumber: String,
    contactEmail: String
    },
        {
        
    })