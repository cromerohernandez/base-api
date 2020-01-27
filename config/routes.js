const express = require('express');
const router = express.Router();
const baseController = require('../controllers/base.controller');
const columnsController = require('../controllers/columns.controller')
const cardsController = require('../controllers/cards.controller')

router.get('/', baseController.base);

//Columns
router.get('/columns', columnsController.list)
router.post('/columns', columnsController.create)
router.get('/columns/:id', columnsController.get)
router.patch('/columns/:id', columnsController.update)
router.delete('/columns/:id', columnsController.delete)

//Cards
router.get('/cards', cardsController.list)
router.post('/cards', cardsController.create)
router.get('/cards/:id', cardsController.get)
router.patch('/cards/:id', cardsController.update)
router.delete('/cards/:id', cardsController.delete)

module.exports = router;