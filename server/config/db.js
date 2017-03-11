//module.exports = {
  //local MongoDB deployment ->
  //"URI": "mongodb://localhost/contactsDB"
   mongoose.connect(process.env.URI || config.URI);
//};
