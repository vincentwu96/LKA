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

		rc1: "---", rc2: "---", rc3: "---", rc4: "---", rc5: "---", rc6: "---",
		rc7: "---", rc8: "---", rc9: "---", rc10: "---", rc11: "---", rc12: "---",

		v1: "---", v2: "---", v3: "---", v4: "---", v5: "---", v6: "---",
		v7: "---", v8: "---", v9: "---", v10: "---", v11: "---", v12: "---",

		g1: "---", g2: "---", g3: "---", g4: "---", g5: "---", g6: "---",
		g7: "---", g8: "---", g9: "---", g10: "---", g11: "---", g12: "---",

		e1: "---",e2: "---",e3: "---",e4: "---",e5: "---",e6: "---",
		e7: "---",e8: "---",e9: "---",e10: "---",e11: "---",e12: "---",

	});
	User.addUser(newUser, (err, user) =>{
		if(err){
			res.json({success: false, msg:'Failed to register user'});
		}else{
			res.json({success: true, msg:'User registered'});
		}
	});

});

// Authenticate
router.post('/authenticate', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err, user) => {
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
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


						rc1: "---", rc2: "---", rc3: "---", rc4: "---", rc5: "---", rc6: "---",
						rc7: "---", rc8: "---", rc9: "---", rc10: "---", rc11: "---", rc12: "---",

						v1: "---", v2: "---", v3: "---", v4: "---", v5: "---", v6: "---",
						v7: "---", v8: "---", v9: "---", v10: "---", v11: "---", v12: "---",


						g1: "---", g2: "---", g3: "---", g4: "---", g5: "---", g6: "---",
						g7: "---", g8: "---", g9: "---", g10: "---", g11: "---", g12: "---",

						e1: "---",e2: "---",e3: "---",e4: "---",e5: "---",e6: "---",
						e7: "---",e8: "---",e9: "---",e10: "---",e11: "---",e12: "---",

					}
				});
			}else{
				return res.json({sucess: false, msg: 'Wrong password'});
			}
		});
	});
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	res.json({user: req.user});
});

module.exports = router;
