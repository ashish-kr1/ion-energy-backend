const mongoose = require('mongoose');

const Temperature = new mongoose.Schema({
    jan: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    feb: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    march: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    april: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    may: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    june: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    july: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    aug: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    sept: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    oct: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    nov: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    dec: { totalTemp: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
});

module.exports = mongoose.model('temperatures', Temperature);