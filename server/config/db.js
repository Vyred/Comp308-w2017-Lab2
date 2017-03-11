module.exports = {
  //local MongoDB deployment ->
  //"URI": "mongodb://localhost/contactsDB"
  "URI": process.env.URI

   //mongoose.connect(process.env.URI || config.URI);
};
