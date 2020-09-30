var services = require('../services/service')    

exports.importTar = async function (req, res, next) {
    try {
        var importsTar = await services.importTar();
        return res.status(200).json({ status: 200, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.exportTar = async function (req, res, next) {
    try {
        var exportTar = await services.exportTar();
        return res.status(200).json({ status: 200, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getStore = async function (req, res, next) {
    try {
        var getTar = await services.getStore();
        console.log("gettar",getTar);
        return res.status(200).json({ status: 200, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}