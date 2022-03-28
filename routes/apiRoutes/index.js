const router = require('express').Router()
const noteRoutes = require('./noteRoutes')

router.use('/notes', noteRoutes)

// if user tries to get to a non-existent route...such as /api/DOESNOTEXIST
// then an error message will be sent back by default
router.use((req, res) => {
    res.status(400).end()
})

module.exports = router