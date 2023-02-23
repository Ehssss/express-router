/* const express = require("express")
const router = express.Router() */
const {User} = require("../models")
const {Router} = require("express");
const userRouter = Router()

userRouter.get('/', async () => {
    try{
        const allUsers = await User.findAll();
        res.status(200).send({allUsers}); // {allUsers: allUsers}
    } catch (error) {
        res.status(500).send({err: error.message})
    }
})

userRouter.post("/", async (req, res) => {
    try{
        const user = await User.create(req.body);
        if (!user){
            throw new Error ("User not created")
        }else{
            res.status(200);
        }
    } catch (error){
        res.status(500).send({err: error.message})
    }
})

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]


module.exports = UserRouter