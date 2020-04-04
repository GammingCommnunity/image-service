var multer = require('multer')
var Datauri = require('datauri');
const path = require('path');
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).array('image');

const dUri = new Datauri();
const dataUri = (file) => dUri.format(path.extname(file.originalname).toString(), file.buffer)

module.exports = { multerUploads, dataUri };