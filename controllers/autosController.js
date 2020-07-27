const fs=require("fs")
let database = require("../data/database");

const autosController ={
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let auto=[]
        res.write("Estos son nuestros autos disponibles: \n\n")

        database.forEach(marca=>{
            marca.autos.forEach(marca=>{
                auto.push(marca)
            })
        })
        auto.forEach(marca=>{
        res.write(marca.marca+" - "+marca.modelo+" - "+marca.anio+" - "+marca.color+"\n")
        })
    },
    autos:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        id=req.params.id
        let auto=[]
        database.forEach(marca=>{
            marca.autos.forEach(marca=>{
                auto.push(marca)
            })
        })

        res.write("Resultados segun tus preferencias \n")

        auto.forEach(marca=>{
            if(id==marca.color){
                res.write(marca.marca+" - "+marca.modelo+" - "+marca.anio+" - "+marca.color+"\n")
            }
            if(id==marca.anio){
                res.write(marca.marca+" - "+marca.modelo+" - "+marca.anio+" - "+marca.color+"\n")
            }

        })
        res.end()
    }
    
}

module.exports = autosController;