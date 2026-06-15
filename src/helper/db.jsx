import mongoose from "mongoose";

export const connectDb = async () =>{

    try{

        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"work_manager"
        })
        console.log("db Connected ....")
        
        //  const user = await new User({
        //     name:"Anshul",
        //     email:"anshul@gmail.com",
        //     password:"anshul",
        //     about:"Full stack Developer",
        //     profielUrl:"https://image.first.com"
        // })

        // await user.save();
        // console.log("user created successfully");

    }
    catch(error){
        console.log("Failed connect with Database ");
        console.log(error)
    }
}