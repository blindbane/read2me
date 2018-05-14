const pageRouter = require('express').Router();

pageRouter.get('/', function getPages (req, res) {
  res.json({pages: 101})
})

module.exports = pageRouter
