const express = require('express');
const router = express.Router();
const PenelitianController = require('../controllers/PenelitianController');

router.get('/penelitian', PenelitianController.getPenelitian);
router.put('/penelitian/:kd_penelitian', PenelitianController.putPenelitian);
router.post('/penelitian', PenelitianController.postPenelitian);
router.delete('/penelitian/:kd_penelitian', PenelitianController.deletePenelitian);

module.exports = router;
