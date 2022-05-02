'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var weatherInfoSchema = Schema( {
    createdAt: Date,
    state:String,
    description: String,
    temp: String,
} );

module.exports = mongoose.model( 'weatherInfo', weatherInfoSchema );
