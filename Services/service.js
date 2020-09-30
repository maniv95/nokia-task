var targz = require('tar.gz');
var fs = require('fs');
var folderArray = [];
exports.importTar = async function(importFile){
    try {
        var importFile = './sample.tar.gz'
        var pathToStore = 'D:\store'
        var importAsTar = new targz().extract(importFile, pathToStore,
        function(err){
            if(err){
                console.log("Error While Extracting Tar:",err);
                return false;
            }
            else{
                console.log('The extraction has ended!');
                return true;
            }
        });
    } catch (error) {
        console.log("Catch Error While Extracting Tar: "/n, error)
    }
}

exports.exportTar = async function(){
    var exportPath = 'D:\store';
    var folderPath='D:\store\phayes-geoPHP-6855624'
    try {
        var exportAsTar = new targz().compress(folderPath, exportPath,
        function(err){
                if(err){
                    console.log("Error While Exporting Tar:",err);
                    return false;
                }else{
                    console.log('The compression has ended!');
                    return true;
                }
            }
        );
        return exportAsTar;
    } catch (error) {
        console.log("Catch Error While Exporting Tar: "/n, error)
    }
}

exports.getStore =  async function(){
    var testFolder = "D:\store"
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
          folderArray.push(file);
        });
    });
    return folderArray;
}
