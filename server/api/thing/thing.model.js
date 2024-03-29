'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  info: String,
  description : String,
  date        : Date,
  user: Object,
  read: Boolean,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);