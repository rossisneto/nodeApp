const express = require('express')
const router = express.Router()


router.route('/').get((req,res)=> {
    res.send('API - Modulo Tasks')
})

module.exports = router