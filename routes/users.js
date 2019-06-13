const express = require('express');
const router = express.Router();

//// register a user using POST method 
//// server link   /api/users
//// access: public 
router.post('/', (req, res) =>{
    res.send('Registration of user')
})

module.exports = router;