


//@desc Get all dossier de compétences
//@route GET /api/v1/dossierdc
//@access Public

exports.getDossierDCs = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: 'Get tous les dossiers de compétences'})
}

//@desc Get SINGLE dossier de compétences
//@route GET /api/v1/dossierdc/:id
//@access Public

exports.getDossierDC = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Get un dossier de compétences ${req.params.id}`})
}

//@desc Create NEW dossier de compétences
//@route POST /api/v1/dossierdc
//@access Private

exports.createDossierDC = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `CREATE un dossier de compétences`})
}

//@desc UPDATE dossier de compétences
//@route PUT /api/v1/dossierdc/:id
//@access Private

exports.updateDossierDC = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `PUT un dossier de compétences ${req.params.id}`})
}
//@desc DELETE dossier de compétences
//@route DELETE /api/v1/dossierdc/:id
//@access Private

exports.deleteDossierDC = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `DELETE un dossier de compétences ${req.params.id}`})
}

