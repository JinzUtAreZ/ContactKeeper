const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

//// Get user authentication
//// server link   /api/auth
//// access: Per User
router.get('/', auth, (req, res) => {
    res.send('Get Users Data');
})

//// Post user authentication
//// server link   /api/auth
//// access: Public

router.post('/', [
    check('email', 'Please input a valid Email').isEmail(),
    check('password','Password is required').exists()
], async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    const { email, password } = req.body;

    try{
        let user = await User.findOne({ email });
        if (!user){
            return res.staus(400).json({ msg: 'Invalid credentials'});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ msg: 'Invalid Credentials' })
        }

        const payload ={
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 }
        , (err, token) => {
            if(err) throw err;
            res.json({ token })
        })

    } catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


module.exports = router;