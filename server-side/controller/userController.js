const User = require("../modal/userModal");
const { validationResult } = require("express-validator");

function errors(req, res) {
  console.log("res ==> ", res);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.errors[0].msg,
      errors: errors.array(),
    });
  }
  return false;
}

//creating User

async function createUser(req, res) {
  try {
    if (!error(req, res)) {
      const { username, email, password, age, city } = req.body;
      const user = await User.create({
        username,
        email,
        password,
        age,
        city,
      });
      res
        .status(200)
        .json({ success: true, message: "User created", data: user });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server error" });
  }
}

//getting users

async function getUser(req, res) {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({
        success: true,
        message: "users feteched successfully",
        data: users,
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, messsage: "Internal server error" });
  }
}

//get user by ID

async function getUserByID(req, res) {
  try {
    const userID = await User.FindByID();
    if (!userID) {
      return res
        .status(404)
        .json({ success: false, message: "User not found", data: userID });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "user feteched successfully",
        data: userID,
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({success:false,message:'server error'});
  }
};

//update User

async function updateUser(req,res){
  try {
    if(!errors(req,res)){
      const {username,city,age}= req.body;
      const updateUser = await User.FindByIdAndUpdate(
        req.params.id,
                { username,city,age },
                { new: true, runValidators: true }
      );
      if(!updateUser){
        return res.status(404).json({success:false,message:"user not found",data:updateUser});
      }
      res.status(200).json({success:true,message:"user Updated successfully",data:updateUser});
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({success:false,message:"server error"})
  }
};

// delete user by ID

async function deleteUser(req,res){
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if(!deletedUser){
      return res.status(404).json({success:false,message:"user not found", data:deletedUser});
    };
    res.status(200).json({success:false,message:"user deleted successfully", data:deletedUser});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({success:false,message:"server error"})
  }
}


module.exports = {createUser,getUser,getUserByID,updateUser,deleteUser};