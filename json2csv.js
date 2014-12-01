var fs = require('fs');

var jsonFile = 'source_json_file.json';
var resultFile = "result_json_2_csv.csv";


function JSONToCSVConvertor(JSONData) {

    var json = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var csv = '';
    
    var row = "";
        
    //extract each row and convert it in string comma-seprated
    for (var index in json) {
        row += index + ',' + '"' + json[index] + '"' + '\r\n';
    }

     csv += row + '\r\n';

     fs.writeFileSync(resultFile, csv, "utf8");
}

var buff = fs.readFileSync(jsonFile, "utf8");

JSONToCSVConvertor(buff)
    
