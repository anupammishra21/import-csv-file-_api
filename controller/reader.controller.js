const readerModel = require('../model/reader.model')
const user_models = require('../model/reader.model')
const csv = require('csvtojson')

class readerController {
    async importData(req,res){
        try{
            let userData = []
            csv().fromFile(req.file.path).then(async(res)=>{
                for(let f = 0; f < res.length; f++){
                    userData.push({
                        firstname:res[f].firstname,
                        lastname:res[f].lastname
                    })

                }
              const saved_data=  await user_models.insertMany(userData)
              console.log(saved_data);
             
            })
            res.status(200).json({
                success:true,
                msg:"sucessfull running ",
               data:userData

            })

         

        }catch(err){
            res.status(400).json({
                success:false,
                msg:err.message
            })
        }


    }

    async data (req,res){
        try{
            let save_data= await user_models.find()
            res.status(200).json({
                msg:"Data Fetching sucessfull",
                data:save_data
            })
            

        }catch(err){

        }

    }

}
module.exports = new readerController()

