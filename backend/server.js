/**** REQUIRING MODULES */
require('dotenv').config()
const express = require ('express')
const { dirname } = require('path')
const path = require ('path')

/*** MODELS */

/** ROUTES */

/** EXPRESS APP CREATION */
const app = express()

/** MIDDLEWARE */
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/** USE REACT FOR STATIC*/
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))


/** MOUNTING ROUTES */

/** OTHER ROUTES */
app.get('*', (req,res) =>{
res.sendFile(path.join(path.dirname(__dirname), "frontend", "dist","index.html"))})

/**PORT */
app.listen(process.env.PORT, function() {
    console.log("Express is listening to " + process.env.PORT)
})