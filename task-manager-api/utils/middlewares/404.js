const messaageBundle = require('../../locales/en');
const {FILE_NOT_FOUND} = require('../config').STATUS_CODES;

module.exports = (req,res,next)=>{

    res.status(FILE_NOT_FOUND).json({
        messaage:messaageBundle["resource_not_found"]
    })
}