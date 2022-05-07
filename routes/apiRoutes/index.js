const router = require('express').Router();
const db = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    let results = db;
    if (results) {
        res.json(results);
    } 
    else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();

    const note = createNewNote(req.body, db);
    res.json(note);
    
});

module.exports = router;