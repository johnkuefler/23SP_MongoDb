const Person = require('../models/person');

exports.person_create = async function(req, res) {
  let person = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
  });

  await person.save();
  res.render('form-submit-confirm', person);
};