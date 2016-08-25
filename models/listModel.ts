///<reference path = "./../typings/tsd.d.ts"/>
let mongoose = require('mongoose');

let SongSchema:any = new mongoose.Schema (
  {
    name: String,
    date_created: Date,
    date_deleted: {
    type: Date,
    default: null
  }
})

let List = mongoose.model("Song", SongSchema);
export = List;
