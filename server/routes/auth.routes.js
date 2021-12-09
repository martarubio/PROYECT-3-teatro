const router = require("express").Router()
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const bcryptSalt = 10;
const User = require("../models/User.model");


router.post('/signup', (req, res) => {
    const {username, pwd} = req.body

    User
        .findOne({ username })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'El usuario ya existe' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(pwd, salt)

            User
                .create({ username, password: hashPass })
                .then((user) => res.status(200).json(user))
                .catch(err => res.status(500).json({ code: 500, message: 'DB error al crear usuario', err: err.message }))
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})


router.post('/login', (req, res) => {

    const { username, pwd } = req.body

    User
        .findOne({ username })
        .then(user => {

            if (!user) {
                res.status(401).json({ code: 401, message: 'Usuario no registrado' })
                return
            }

            if (bcrypt.compareSync(pwd, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Contraseña incorrecta' })
                return
            }

            req.session.currentUser = user
            console.log(req.session.currentUser)
            res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})


router.get('/logout', (req, res) => {
    console.log(req.session.currentUser)
    req.session.destroy((err) => res.status(200).json({ code: 200, message: 'Cerrada sesión' }));
})

router.get("/isloggedin", (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'No autorizado' })
})

module.exports = router
