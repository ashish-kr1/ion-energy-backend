const multer = require('multer');
const jsonConverter = require('../helper/jsonConverter');
const Temperature = require('./../models/temperatures')
// var upload = multer({ dest: './uploads/' })
var storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

var upload = multer({ storage: storage }).any();
module.exports = {
    uploadtemperature: async (req, res) => {
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                console.log(err)
            } else if (err) {
                return res.status(500).send({ messge: 'Upload a file' })
                // An unknown error occurred when uploading.
            }
            return res.status(200).send({ messge: 'uploaded' });
            // Everything went fine.
        })
    },
    gettemperature: async (req, res) => {
        const content = await jsonConverter.convertFile(req, res);
    },
    getdata: async (req, res) => {
        await jsonConverter.getData(req, res);
    },
    getFromDB: async (req, res) => {
        try{
            const data = await Temperature.find({}).lean();
            // saved all record for future use and getting only last record to represent in graph // 
            return res.status(200).send(data[data.length-1]);
        }catch(err){
            console.log(err)
        }
    }
}