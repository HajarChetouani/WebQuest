const mongoose = require('mongoose');
const _ = require('lodash');
const Form = mongoose.model('Form');


module.exports.addF= (req, res, next) => {
   var form = new Form();
    form.email = req.body.email;
    form.titre = req.body.titre;
     req.body.questions.forEach(function (q) {
         form.questions.push(q);

     });
    form.save((err, doc) => {
        if (!err)res.send(doc);
        else {
              if (err.code === 11000) res.status(422).send(['Duplicate titre formulaire found.']);
            else
              return next(err);
    }
    });
};
module.exports.get= (req, res, next) => {



        Form.findOne({ titre:req.params.titre},
            (err, form) => {
                if (!form)
                    return res.status(404).json({ status: false, message: 'Form record not found.' });
                else
                    return res.status(200).json({ status: true, form });
            }
        );
    }
