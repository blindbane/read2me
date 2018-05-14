const userRouter = require('express').Router();

userRouter.get('/', function getUsers (req, res) {
  res.json({users: 101})
})

module.exports = userRouter
