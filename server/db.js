const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://thatguy:1248@cluster1.cdc7q.mongodb.net/multistep?retryWrites=true&w=majority"
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


