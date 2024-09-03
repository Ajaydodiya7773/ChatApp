import User from "../models/user.model.js";

export const signup = async (req,res) => {
try {
    
    const { name, email, password, confirmpassword} = req.body;
    if (password !== confirmpassword) {
        return res.status(400).json({message:"Password do not match"});
    }
    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({message: "Email already exists"});
    }
    const newUser = await new User({
        name,
        email,
        password,
        confirmpassword,
    })
      await newUser
      .save()
      .then(()=>
    res.status(201).json({message:"User registerd successfully"})
    )
} catch (error) {
    console.log(error);
    res.status(500).json({message:"Server error"});
}
};
