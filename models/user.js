const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({	
	name: {
		type: String,
		required: true
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

	generalComments:{
		type: String
	},

	// Reading Comprehension
	rc1:{type: String}, rc2:{type: String}, rc3:{type: String}, rc4:{type: String},
	rc5:{type: String}, rc6:{type: String}, rc7:{type: String}, rc8:{type: String},

	// Vocabulary
	v1:{type: String}, v2:{type: String}, v3:{type: String}, v4:{type: String},
	v5:{type: String}, v6:{type: String}, v7:{type: String}, v8:{type: String},

	// Session Comments
	c1:{type: String}, c2:{type: String}, c3:{type: String}, c4:{type: String},
	c5:{type: String}, c6:{type: String}, c7:{type: String}, c8:{type: String},

	// Writing Conventions
	wc1:{type: String}, wc2:{type: String}, wc3:{type: String}, wc4:{type: String},
	wc5:{type: String}, wc6:{type: String}, wc7:{type: String}, wc8:{type: String},

	// Paragraph Coherence/Unity
	pcu1:{type: String}, pcu2:{type: String}, pcu3:{type: String}, pcu4:{type: String},
	pcu5:{type: String}, pcu6:{type: String}, pcu7:{type: String}, pcu8:{type: String},

	// Sentence Variety
	sv1:{type: String}, sv2:{type: String}, sv3:{type: String}, sv4:{type: String},
	sv5:{type: String}, sv6:{type: String}, sv7:{type: String}, sv8:{type: String},

	// Ideas/Depth/Length
	idl1:{type: String}, idl2:{type: String}, idl3:{type: String}, idl4:{type: String},
	idl5:{type: String}, idl6:{type: String}, idl7:{type: String}, idl8:{type: String}
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
