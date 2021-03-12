const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = `mongodb+srv://thatguy:${process.env.DBPASS}@cluster1.cdc7q.mongodb.net/multistep?retryWrites=true&w=majority`
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
try {
   mongoose.connect(mongoURI,options,()=>{
       console.log('connected')
   }) 
} catch (error) {
   console.log(error)
}


