module.exports = {
  //local MongoDB deployment ->
  //"URI": "mongodb://localhost/contactsDB"
  //"URI": process.env.URI
   //mongoose.connect(process.env.URI || config.URI);
   "URI" : "mongodb://<dbuser>:<dbpassword>@ds129050.mlab.com:29050/lab2database"
};
