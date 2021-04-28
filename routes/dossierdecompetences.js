const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

});
 
router.post('/', (req, res) => {
    res
    .status(200)
    .json({success: true, msg: 'CREATE un dossier de compétences'})
});
 
router.put('/:id', (req, res) => {
    res
    .status(200)
    .json({success: true, msg: `PUT un dossier de compétences ${req.params.id}`})
});
router.delete('/:id', (req, res) => {
    res
    .status(200)
    .json({success: true, msg: `DELETE un dossier de compétences ${req.params.id}`})
});

module.exports =  router;