const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')

const fs = require('fs')
const path = require('path')

const { validateNote } = require('../../lib/notes')
const notes = require('../../db/db.json')

router.get('/', (req, res) => {
    res.json(notes)
})

// delete must be IN PLACE since the NOTES ARRAY is stored in specific memory location
// router.get above will always display the notes in the NOTES ARRAY
// so we need to change the NOTES ARRAY IN PLACE
// can't use filter since it creates a new array
router.delete('/:id', (req, res) => {

    // findIndex will find the index number of the first element in the array
    let index = notes.findIndex(note => note.id === req.params.id)
    // splice will remove element IN PLACE 
    notes.splice(index, 1)
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes))
    // notes have to be sent back in json format
    // fetch api is expecting a response.json()
    res.status(200).json(notes)
})

router.post('/', (req, res) => {
    if (!req.body.id) {
        req.body.id = uuidv4()
    }
    if (!validateNote(req.body)) {
        res.status(400).json({ message: 'The note is not properly formatted.' })
    } else {
        notes.push(req.body)
        fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes))
        res.status(200).json(notes)
    }
})

module.exports = router