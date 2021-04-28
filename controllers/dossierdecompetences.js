


//@desc Get all dossier de compétences
//@route GET /api/v1/dossierdc
//@access Public

exports.getDossierDC = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: 'Get tous les dossiers de compétences'})
}