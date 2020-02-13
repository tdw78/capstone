const Service = require("./models").Service;

module.exports = {

getAllServices(callback){
    return Service.findAll()
      .then((services) => {
        callback(null, services)
     })
      .catch((err) => {
        callback(err)
    })
}

}