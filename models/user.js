const mongoose = require ('mongoose');
//the mongoose object has a property called schema, this takes this property and assigns it to a variable named Schema
const {Schema} = mongoose;
const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);