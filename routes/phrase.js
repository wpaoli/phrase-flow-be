const express = require('express')
const router = express.Router()
const {
     addPhrase

    } = require('../controllers/phrase')

// -------------------------CUSTOM ROUTE-------------------------
router.post('/add-phrase',
    addPhrase
)




// -------------------------EXPORT ROUTER-------------------------
module.exports = router