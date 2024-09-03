import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // createdAt & updatedAt
    }
);

// If you want to validate the confirm password, do it before saving the user
userSchema.pre('save', function (next) {
    if (this.password !== this.confirmpassword) {
        throw new Error("Passwords do not match");
    }
    next();
});

const User = mongoose.model("User", userSchema);
export default User;
