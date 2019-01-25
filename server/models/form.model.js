const mongoose = require('mongoose');

/**
 *
 */
var FormSchema = new mongoose.Schema({
    titre:  {
        type:String,
        required: 'titre can\'t be empty',
        unique:true
    },
    email: {
        type:String
    } ,
    questions: []

});
mongoose.model('Form', FormSchema);

