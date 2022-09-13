// === CRUD ===
// import the model to make queries to the DB
const Note = require("../models/Note")

module.exports = {
    
    // READ ALL
    findAll: (req, res) => {
        Note.find()
            .then(allDaNotes => {
                console.log(allDaNotes.length);
                res.json(allDaNotes)
            })
            .catch(err => res.json(err))
    },

    // CREATE
    create: (req, res) => {
        // pass in body data
        console.log(req.body);
        Note.create(req.body)
            .then(newNote => {
                // res.json({message: "created", newNote, status: 200})
                res.json(newNote)
            })
            .catch(err => res.json(err))
    },

    // READ ONE
    findOne: (req, res) => {
        console.log(req.params.id);
        // Note.find({_id:req.params.id })
        Note.findById(req.params.id)
            .then(oneNote => res.json(oneNote))
            .catch(err => res.json(err))
    },

    // UPDATE
    update: (req, res) => {
        console.log("UPDATE id:", req.params.id);
        console.log("req.body:", req.body);
        // Note.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        Note.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedNote => res.json(updatedNote))
            .catch(err => res.json(err))
    },

    // DELETE
    delete: (req, res) => {
        console.log(req.params.id);
        Note.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }


}