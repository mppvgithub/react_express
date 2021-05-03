var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var photoSchema = new Schema({

  path:  { type: String },
  caption: { type: String }
  });

module.exports = mongoose.model('Images', photoSchema);

// 'Photos' --> this is document name
// 'Images' --> this is document name