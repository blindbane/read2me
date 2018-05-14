const collectionRouter = require('express').Router();

collectionRouter.get('/', function getCollections (req, res) {
  res.json({collections: 101})
})

module.exports = collectionRouter
