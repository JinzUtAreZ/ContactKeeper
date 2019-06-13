const express = require('express');
const router = express.Router();

//// Get contacts list details
//// server link    /api/contacts
//// access: Per User

router.get('/', (req, res) => {
    res.send('Get contacts information');
})

//// Post contacts data 
//// server link    /api/contacts
//// access: Per User

router.post('/', (req, res) => {
    res.send('Send contacts information');
})

//// Put update per contact
//// server link    /api/contacts
//// access: Per User

router.put('/:id', (req, res) => {
    res.send('Update contacts information');
})

//// Delete per contact
//// server link    /api/contacts
//// access: Per User

router.delete('/:id', (req, res) => {
    res.send('Delete contacts information');
})

module.exports = router;