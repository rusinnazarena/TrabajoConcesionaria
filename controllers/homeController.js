const fs=require("fs")
let database = require("../data/database");

const homeController ={
    index: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Bienvenidos al Home\n\n");
        res.write("Si queres visitarnos, estas son nuestras sucursales:\n")

        database.forEach(concesionaria => {
            res.write(concesionaria.sucursal+ "\n")            
        });
        res.end()
    }
}

module.exports = homeController;