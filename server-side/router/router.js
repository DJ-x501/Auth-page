const express = require("express");
const {body} = require('express-validator');
const {getUser,createUser,getUserByID,updateUser,deleteUser} = require('../controller/userController');


// Routing.............
const router = express.Router();


const validateRegister = [
    body('username')
    .isEmpty()
    .isString()
    .withMessage("username is required (username should range between 3 to 10 words.)")
    .isLength({min:3,max:10}),

    body('email')
    .isEmpty()
    .isEmail()
    .withMessage("Enter a valid Email."),

    body('password')
    .isEmpty()
    .isLength({min:4,max:10})
    .withMessage("password should range between 4 to 10 characters."),

    body('age')
    .isEmpty()
    .isNumeric()
    .isLength({min:18,max:100})
    .withMessage("the age should be between 18 to 100"),

    body('city')
    .isEmpty()
    .isString()
    .withMessage("select a valid option")
];


// creating curd operations
router.post("/create",validateRegister,createUser);
router.get("/profile:id",getUserByID);
router.put("/update",validateRegister,updateUser);
router.delete("/delete:id",deleteUser);


module.exports = router;