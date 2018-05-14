const apiRouter = require('express').Router();
const collectionRouter = require('./collection');
const pageRouter = require('./page');
const userRouter = require('./user');

apiRouter.use('/collection', collectionRouter)
apiRouter.use('/page', pageRouter)
apiRouter.use('/user', userRouter)

module.exports = apiRouter