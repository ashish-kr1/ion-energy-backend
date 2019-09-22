const express = require('express');
const router = require('express').Router();
const Temp = require('../controller/temp')
module.exports = () => {

    router.post('/sendtemp',Temp.uploadtemperature);
    router.get('/gettemp',Temp.gettemperature);
    router.get('/getdata/:month',Temp.getdata);
    router.get('/getAllTemp',Temp.getFromDB)

    return router;
}
