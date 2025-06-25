import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'], //db te user rakhte chai-----------
      unique: true,
      // trim: true,
    },
    name:{
     type:String,
     required:[true,'Username is required'],

    },
    email: {
      type: String,
      required: [true, 'Email is required'], //db te user rakhte chai-----------
      unique: true,
      trim: true,
    },
    password: {
      type: String,
     default: null,
      
    },

    isVerified:{
          type:Boolean,
          default:false,
    },

    passwordResetToken:{
     type:String,
     default:null,
    },
    passwordResetExpires:{
     type: Date,
     default:null,
    },

    status: {
      type: String,
      enum: ['active', 'inactive', 'suspended'],
      default: 'active', //case sensitive-----------
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
