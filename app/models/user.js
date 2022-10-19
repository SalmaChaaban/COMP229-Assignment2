import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose'; // library for encrypting and encoding data
const { passportLocalSchema } = mongoose; // a fix

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String
}, {
    timestamps: true,
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose); // Mongoose allows the use of plugins

export default mongoose.model('User', UserSchema);