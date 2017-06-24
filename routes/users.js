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
		/*
		e1: req.body.e1,
		e2: req.body.e2,
		e3: req.body.e3,
		e4: req.body.e4,
		e5: req.body.e5,
		e6: req.body.e6,
		e7: req.body.e7,
		e8: req.body.e8,
		e9: req.body.e9,
		e10: req.body.e10,
		e11: req.body.e11,
		e12: req.body.e12*/
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
						/*e1: user.e1,
						e2: user.e2,
						e3: user.e3,
						e4: user.e4,
						e5: user.e5,
						e6: user.e6,
						e7: user.e7,
						e8: user.e8,
						e9: user.e9,
						e10: user.e10,
						e11: user.e11,
						e12: user.e12*/
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
