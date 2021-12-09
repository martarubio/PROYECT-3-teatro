const router = require("express").Router()
const Event = require('../models/Event.model')


router.get("/allEvents", (req, res) => {
    Event.find()
        .then(allEvents => res.json(allEvents))
        .catch(err => res.json({ err, errMessage: "Problema buscando Events" }))
})

router.get("/event/:id", (req, res) => {
    const { id } = req.params

    Event.findById(id)
        .then(theEvent => res.json(theEvent))
        .catch(err => res.json({ err, errMessage: "Problema buscando un Event" }))
})


router.post("/newEvent", (req, res) => {
    const { title, genre, director, duration, theatre, location, days, time, price, imageUrl } = req.body

    Event.create({ title, genre, director, duration, theatre, location, days, time, price, imageUrl })
        .then(newEvent => res.json(newEvent))
        .catch(err => res.json({ err, errMessage: "Problema creando Event" }))
})

router.put("/editEvent/:id", (req, res) => {
    const { id } = req.params
    const { title, genre, director, duration, theatre, location, days, time, price, imageUrl } = req.body

    Event.findByIdAndUpdate(id, { title, genre, director, duration, theatre, location, days, time, price, imageUrl }, { new: true })
        .then(updatedEvent => res.json(updatedEvent))
        .catch(err => res.json({ err, errMessage: "Problema editando Event" }))
})

router.delete("/deleteEvent/:id", (req, res) => {
    const { id } = req.params

    Event.findByIdAndDelete(id)
        .then(deletedEvent => res.json({ deletedEvent }))
        .catch(err => res.json({ err, errMessage: "Problema borrando Event" }))
})

module.exports = router