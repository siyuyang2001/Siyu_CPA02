'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var suggestionSchema = Schema( {
name:String,
reupcycle:String,
address1:String,
address2:String,
city:String,
state:String,
zip:String,
imgURL:String,
webURL: String,
details:String,
phone:String,
hrs:String,
createdAt:Date,
userID:ObjectId,
placeID:String,

} )

module.exports = mongoose.model( 'Suggestion', suggestionSchema );
