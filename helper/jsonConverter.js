const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Temperature = require('./../models/temperatures');
__filename;
var jsonData;
var jan = { "temp": 0, "count": 0 }, feb = { "temp": 0, "count": 0 }, march = { "temp": 0, "count": 0 },
    april = { "temp": 0, "count": 0 }, may = { "temp": 0, "count": 0 }, june = { "temp": 0, "count": 0 },
    july = { "temp": 0, "count": 0 }, aug = { "temp": 0, "count": 0 }, sept = { "temp": 0, "count": 0 },
    oct = { "temp": 0, "count": 0 }, nov = { "temp": 0, "count": 0 }, dec = { "temp": 0, "count": 0 };
var start = 0; limit = 400000;
const self = module.exports = {
    convertFile: async (req, res) => {
        try {
            fs.readdir('./uploads', (err, files) => {
                files.forEach(file => {
                    __filename = file
                });
                fs.readFile(`./uploads/${__filename}`, function read(err, data) {
                    if (err) {
                        console.log(err)
                    }
                    data = Buffer.from(data).toString();
                    jsonData = JSON.parse(data);
                    console.log(jsonData.length)
                    res.status(200).send({ message: "ok" });
                });
            });
        } catch (err) {
            console.log('Error is: ', err);
            return res.status(500).send({ message: 'Something went wrong!' });
        }
    },
    getData: async (req, res) => {
        if (limit < 3000000) {
            newArray = jsonData.splice(start, limit);
            for (let temp of newArray) {
                const year = new Date(temp.ts).getFullYear();
                const month = Number(new Date(temp.ts).toLocaleString().split('/')[0]);
                if (month == 1 && year == 2016) { jan.temp += (temp.val); jan.count += 1; }
                if (month == 2 && year == 2015) { feb.temp += (temp.val); feb.count += 1 }
                if (month == 3 && year == 2015) { march.temp += (temp.val); march.count += 1 }
                if (month == 4 && year == 2015) { april.temp += (temp.val); april.count += 1 }
                if (month == 5 && year == 2015) { may.temp += (temp.val); may.count += 1 }
                if (month == 6 && year == 2015) { june.temp += (temp.val); june.count += 1 }
                if (month == 7 && year == 2015) { july.temp += (temp.val); july.count += 1 }
                if (month == 8 && year == 2015) { aug.temp += (temp.val); aug.count += 1 }
                if (month == 9 && year == 2015) { sept.temp += (temp.val); sept.count += 1 }
                if (month == 10 && year == 2015) { oct.temp += (temp.val); oct.count += 1 }
                if (month == 11 && year == 2015) { nov.temp += (temp.val); nov.count += 1 }
                if (month == 12 && year == 2015) { dec.temp += (temp.val); dec.count += 1 }
            }
            start = limit + 1; limit = limit * 2;
        }

        if (req.params.month == "jan") { self.saveToDB(); res.status(200).send({ totalTemp: jan.temp, count: jan.count }); }
        if (req.params.month == "feb") { res.status(200).send({ totalTemp: feb.temp, count: feb.count }); }
        if (req.params.month == "march") { res.status(200).send({ totalTemp: march.temp, count: march.count }); }
        if (req.params.month == "april") { res.status(200).send({ totalTemp: april.temp, count: april.count }); }
        if (req.params.month == "may") { res.status(200).send({ totalTemp: may.temp, count: may.count }); }
        if (req.params.month == "june") { res.status(200).send({ totalTemp: june.temp, count: june.count }); }
        if (req.params.month == "july") { res.status(200).send({ totalTemp: july.temp, count: july.count }); }
        if (req.params.month == "aug") { res.status(200).send({ totalTemp: aug.temp, count: aug.count }); }
        if (req.params.month == "sept") { res.status(200).send({ totalTemp: sept.temp, count: sept.count }); }
        if (req.params.month == "oct") { res.status(200).send({ totalTemp: oct.temp, count: oct.count }); }
        if (req.params.month == "nov") { res.status(200).send({ totalTemp: nov.temp, count: nov.count }); }
        if (req.params.month == "dec") { res.status(200).send({ totalTemp: dec.temp, count: dec.count }); }

    },
    saveToDB(){
        const tempeartue = new Temperature();
            tempeartue['feb'].totalTemp = feb.temp;
            tempeartue['feb'].count = feb.count;
            tempeartue['march'].totalTemp = march.temp;
            tempeartue['march'].count = march.count;
            tempeartue['april'].totalTemp = april.temp;
            tempeartue['april'].count = april.count;
            tempeartue['may'].totalTemp = may.temp;
            tempeartue['may'].count = may.count;
            tempeartue['june'].totalTemp = june.temp;
            tempeartue['june'].count = june.count;
            tempeartue['july'].totalTemp = july.temp;
            tempeartue['july'].count = july.count;
            tempeartue['aug'].totalTemp = aug.temp;
            tempeartue['aug'].count = aug.count;
            tempeartue['sept'].totalTemp = sept.temp;
            tempeartue['sept'].count = sept.count;
            tempeartue['oct'].totalTemp = oct.temp;
            tempeartue['oct'].count = oct.count;
            tempeartue['nov'].totalTemp = nov.temp;
            tempeartue['nov'].count = nov.count;
            tempeartue['dec'].totalTemp = dec.temp;
            tempeartue['dec'].count = dec.count;
            tempeartue['jan'].totalTemp = jan.temp;
            tempeartue['jan'].count = jan.count;
            tempeartue.save();
    }

}