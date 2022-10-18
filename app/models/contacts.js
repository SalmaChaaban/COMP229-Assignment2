import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String, // String is not the same as a variable of type string it's a type created by mongoose not an acronym
    number: String,
    email: String
}, {
    // options
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactSchema);