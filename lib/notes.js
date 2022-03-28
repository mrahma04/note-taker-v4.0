const fs = require('fs')
const path = require('path')

const notes = require('../db/db.json')
// const notesArr = []

const filterByQuery = (query, notesArr) => {
    let filteredNotes = notesArr
    if (query.id) {
        filteredNotes = filteredNotes.filter(note => note.id === query.id)
    }
    if (query.title) {
        filteredNotes = filteredNotes.filter(note => note.title === query.title)
    }
    if (query.text) {
        filteredNotes = filteredNotes.filter(note => note.text === query.text)
    }
    return filteredNotes
}

// console.log(filterByQuery({ id: 2 }, notes))
// console.log(filterByQuery({ title: 'TEST TITLE 2' }, notes))
// console.log(filterByQuery({ text: 'TEST TEXT 2' }, notes))

const filterById = (id, notesArr) => {
    let filteredNotes = notesArr
    filteredNotes = filteredNotes.filter(note => note.id === id)
    return filteredNotes
}

// console.log(filterById(2, notes))

// pass the db.json file as notesArr
// push new note to notesArr
// write the updated notesArr back to db.json
const createNewNote = (note, notesArr) => {
    notesArr.push(note)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArr, 2, null))
}

// createNewNote({
//     id: 5,
//     title: "TEST TITLE 5",
//     text: "TEST TEXT 5"
// }, notes)

// pass the db.json file as notesArr
// create a new updatedNotesArr that filters out the note with id
// write the updated updatedNotesArr back to db.json
const deleteSingleNote = (id, notesArr) => {
    const updatedNotesArr = notesArr.filter(note => note.id !== id)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(updatedNotesArr, 2, null))
}

// deleteSingleNote(3, notes)

const updateNote = (note, notesArr) => {
    let updatedNotesArr = notesArr
    if (note.id) {
        let findNote = updatedNotesArr.filter(element => {
            element.id === note.id
        })
        findNote = note
        updatedNotesArr.push(findNote)
    }
    if (note.title) {
        let findNote = updatedNotesArr.filter(element => {
            element.title === note.title
        })
        findNote = note
        updatedNotesArr.push(findNote)
    }
    if (note.text) {
        let findNote = updatedNotesArr.filter(element => {
            element.text === note.text
        })
        findNote = note
        updatedNotesArr.push(findNote)
    }
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(updatedNotesArr, 2, null))
}

const validateNote = (note) => {
    if (!note.title || typeof note.title !== 'string') {
        return false
    }
    if (!note.text || typeof note.text !== 'string') {
        return false
    }
    return true
}

// updateNote({
//     // id: 5,
//     // title: "TEST TITLE 5 UPDATED",
//     text: "TEST TEXT 5 UPDATED"
// }, notes)

module.exports = { filterByQuery, filterById, createNewNote, deleteSingleNote, updateNote, validateNote }