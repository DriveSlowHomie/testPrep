import express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Song = require('../models/listModel');

router.post('/songs', (req, res, next) => {
    let song = new Song({
      name: req.body.name,
      date_created: new Date()
    })
  });

router.get('/songs', (req, res, next) => {
  console.log("This is a test!!!!!!!!!!!!!!!!!!!!")
  Song.find({date_deleted: null}).then((song) => {
    res.send(song);
  })
});



export = router;
