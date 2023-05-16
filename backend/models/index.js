require('dotenv').config()
const express = require('express')
const mongodbURI = process.env.MONGODBURI

/** Connection to database */
(async function () {
    await mongoose.connect(mongodbURI)
    console.log('Mongoose is connected to ', mongodbURI)
})().catch(err =>console.log("Mongoose connection error " + err))

/** EXPORTING MODELS */