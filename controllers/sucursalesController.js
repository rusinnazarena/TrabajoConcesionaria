const fs=require("fs")
let database = require("../data/database");

const sucursalesController ={
    index: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Estan son nuestras sucursales:\n")

        database.forEach(concesionaria => {
            res.write(concesionaria.sucursal+ "\n")
            res.write(concesionaria.direccion+ "\n")
            res.write(concesionaria.telefono+ "\n\n")
        });
        res.end()
    },

    sucursal: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        
        let idConcesionaria = req.params.id;
        database.forEach(concesionaria=>{
            if(concesionaria.sucursal.toLowerCase() == idConcesionaria.toLowerCase())
            {
                res.write(concesionaria.sucursal+ "\n")
                res.write(concesionaria.direccion+ "\n")
                res.write(concesionaria.telefono+ "\n\n")

                res.write("Autos Disponibles en esta Sucursal:\n")
                concesionaria.autos.forEach(auto=>{
                    res.write(auto.marca+" - "+auto.modelo+" - "+auto.anio+"\n")
                })
                res.end("\nCantidad de autos disponibles: "+concesionaria.autos.length)
            }
        })
        res.end("No existe esa sucursal")
    }
}

module.exports = sucursalesController;