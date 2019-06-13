const express = require('express')
const router = express.Router();

//// Get user authentication
//// server link   /api/auth
//// access: Per User
router.get('/', (req, res) =>{
    res.send('Get Users Authentication');
})

//// Post user authentication
//// server link   /api/auth
//// access: Public
router.post('/', (req, res) =>{
    res.send('Post Users Data');
})


module.exports = router;