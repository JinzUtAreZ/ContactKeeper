const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult} = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

//// Get contacts list details
//// server link    /api/contacts
//// access: Per User

router.get('/', auth, async(req, res) => {
    try{
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1})
        res.json(contacts);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//// Post contacts data 
//// server link    /api/contacts
//// access: Per User

router.post('/', [auth,[check('name','Name is required').not().isEmpty()]
], async(req, res) => {
    const errors = validationResult(check);
    if (!errors.isEmpty()){
        return res.status(400).send({ errors: errors.array()})
    }
    const { name, email, phone, type } = req.body;
    
    try{
        const newContact = new Contact ({
           name, email, phone, type, user: req.user.id 
        });
        const contact = await newContact.save();
        res.json(contact);
        
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//// Put update per contact
//// server link    /api/contacts
//// access: Per User

router.put('/:id', auth, async(req, res) => {
    const { name, email, phone, type } = req.body;

    const contactFields = {};

    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;

    try { 
        let contact = await Contact.findById(req.params.id);

        if(!contact) return res.status(404).json({ msg: 'Contact not found'});

        // Make sure user owns contact
        if(contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' })
        }
        contact = await Contact.findByIdAndUpdate(req.params.id, 
        { $set: contactFields } // update contact that exists
        , { new : true });  // if contact doesn't exist create new

        res.json(contact);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
})

//// Delete per contact
//// server link    /api/contacts
//// access: Per User

router.delete('/:id', auth, async(req, res) => {
    try{
        let contact = await Contact.findById(req.params.id);

        if (!contact) return res.status(404).json({ msg: 'Contact not Found'});

        // Make sure user owns contact
        if(contact.user.toString() !== req.user.id){
            res.status(401).json({ msg: 'Not Authorized'});
        }

        contact = await Contact.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Contact removed'})

    } catch(err){
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' })
    }
})

module.exports = router;