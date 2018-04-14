const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');


// Register
router.post('/register', (req, res, next) => {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,

		generalComments: "None",

		rc1: "---", rc2: "---", rc3: "---", rc4: "---",
		rc5: "---", rc6: "---", rc7: "---", rc8: "---",

		v1: "---", v2: "---", v3: "---", v4: "---",
		v5: "---", v6: "---", v7: "---", v8: "---",

		c1: "---", c2: "---", c3: "---", c4: "---",
		c5: "---", c6: "---", c7: "---", c8: "---",

		wc1: "---", wc2: "---", wc3: "---", wc4: "---",
		wc5: "---", wc6: "---", wc7: "---", wc8: "---",

		pcu1: "---", pcu2: "---", pcu3: "---", pcu4: "---",
		pcu5: "---", pcu6: "---", pcu7: "---", pcu8: "---",

		sv1: "---", sv2: "---", sv3: "---", sv4: "---",
		sv5: "---", sv6: "---", sv7: "---", sv8: "---",

		idl1: "---", idl2: "---", idl3: "---", idl4: "---",
		idl5: "---", idl6: "---", idl7: "---", idl8: "---",
	});
	User.addUser(newUser, (err, user) =>{
		if(err){
			res.json({success: false, msg:'Something went wrong'});
		}else{
			res.json({success: true, msg:'Registration successful'});
		}
	});

});

// Authenticate for Login
router.post('/authenticate', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;
	if(password == undefined){
		return res.json({sucess: false, msg: 'Invalid username or password'});
	}
	User.getUserByUsername(username, (err, user) => {
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'Invalid username or password'});
		}
		User.comparePassword(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign(user, config.secret, {
					expiresIn: 10000
				});

				res.json({
					success: true,
					token: 'JWT '+token,
					user: {
						id:user._id,
						name: user.name,
						username: user.username,
						email: user.email,

						generalComments: "None",
						rc1: "---", rc2: "---", rc3: "---", rc4: "---", 
						rc5: "---", rc6: "---", rc7: "---", rc8: "---",

						v1: "---", v2: "---", v3: "---", v4: "---",
						v5: "---", v6: "---", v7: "---", v8: "---",

						c1: "---", c2: "---", c3: "---", c4: "---",
						c5: "---", c6: "---", c7: "---", c8: "---",

						wc1: "---", wc2: "---", wc3: "---", wc4: "---",
						wc5: "---", wc6: "---", wc7: "---", wc8: "---",

						pcu1: "---", pcu2: "---", pcu3: "---", pcu4: "---",
						pcu5: "---", pcu6: "---", pcu7: "---", pcu8: "---",

						sv1: "---", sv2: "---", sv3: "---", sv4: "---",
						sv5: "---", sv6: "---", sv7: "---", sv8: "---",

						idl1: "---", idl2: "---", idl3: "---", idl4: "---",
						idl5: "---", idl6: "---", idl7: "---", idl8: "---",
					}
				});
			}else{
				return res.json({sucess: false, msg: 'Invalid username or password'});
			}
		});
	});
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	res.json({user: req.user});
});

module.exports = router

