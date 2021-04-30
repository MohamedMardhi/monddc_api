const express = require('express');
const {
    getDossierDC, 
    getDossierDCs, 
    createDossierDC, 
    updateDossierDC, 
    deleteDossierDC
} = require('../controllers/dossierdecompetences')
const router = express.Router();

router
    .route('/')
    .get(getDossierDCs)
    .post(createDossierDC)

router
    .route('/:id')
    .get(getDossierDC)
    .put(updateDossierDC)
    .delete(deleteDossierDC)

module.exports =  router;