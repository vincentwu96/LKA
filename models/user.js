const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	e1:{type: String}, e2:{type: String}, e3:{type: String},
	e4:{type: String}, e5:{type: String}, e6:{type: String},
	e7:{type: String}, e8:{type: String}, e9:{type: String},
	e10:{type: String},e11:{type: String},e12:{type: String},

	rc1:{type: String}, rc2:{type: String}, rc3:{type: String},
	rc4:{type: String}, rc5:{type: String}, rc6:{type: String},
	rc7:{type: String}, rc8:{type: String}, rc9:{type: String},
	rc10:{type: String},rc11:{type: String},rc12:{type: String},

	v1:{type: String}, v2:{type: String}, v3:{type: String},
	v4:{type: String}, v5:{type: String}, v6:{type: String},
	v7:{type: String}, v8:{type: String}, v9:{type: String},
	v10:{type: String},v11:{type: String},v12:{type: String}

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);

}

module.exports.getUserByUsername = function(username, callback){
	const query = {username: username}
	User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) =>{
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});

}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
}
