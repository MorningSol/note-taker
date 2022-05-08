const router = require('express').Router();
const  notes  = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    let results = notes;
    if (results) {
        res.json(results);
    } 
    else {
        res.sendStatus(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
    
});

module.exports = router;