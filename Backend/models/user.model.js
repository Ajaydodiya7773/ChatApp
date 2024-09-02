import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { 
        type: String,
         require: true, 
        },

    email: { 
        type: String, 
        require: true, 
        unique: true, 
        lowercase: true, 
    },

    password: { 
        type: String, 
        require: true,
    },

    confirmpassword: {
         type: String, 
         require: true, 
        },
},
{
timestampes: true, //userCrated , UpdetedAt    
});
const User = mongoose.model("User",userSchema);
export default User;