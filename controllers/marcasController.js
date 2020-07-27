const fs=require("fs")
let database = require("../data/database");

const marcasController ={
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Nuestras Marcas\n")

        let marca =[];
        database.forEach(mar=>{
            mar.autos.forEach(mar=>{

                marca.push(mar.marca)
            })
        })
         marca = marca.filter((a, index) =>marca.indexOf(a) === index)
        marca.forEach(mar=>{
            res.write("-"+mar+"\n")
            
        })
       res.end()
    },
    marca:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id=req.params.id
        let marca=[];

        database.forEach(mar=>{

        mar.autos.forEach(mar=>{
            marca.push(mar)
        }) })
    
        res.write("Autos de la marca "+id+"\n")
        marca.forEach(mar=>{

            if(mar.marca==id){

            res.write(mar.modelo+" - "+mar.anio+"\n")            
             }
             
            })
      
      res.end()
  }
 }
    
    


module.exports = marcasController;