import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique:true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      require: true, 
      unique:true,
    },
    password: {
      type: String,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: {
      type: String,
      default: null,
    },
    passwordResetExpires: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'suspended'],
      default: 'active',
    },
  },
  { timestamps: true }
);

userSchema.pre("save",async function(next){
if(!this.isModified('password')|| !this.password) return next();
this.password=await bcrypt.hash(this.password,10);
next();
});


export const User = mongoose.models.User || mongoose.model('User', userSchema);
