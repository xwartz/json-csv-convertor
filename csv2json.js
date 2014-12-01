var fs = require('fs');

var csvFile = 'source_csv_file.csv';
var resultFile = "result_csv_2_json.json";


function CSVToJSONConvertor(csvData) {
    // split to array
    var rowsArray = csvData.split('\n');
    var row = '';
    var json = '';

    for (var i = 0; i < rowsArray.length; i++) {
        var commaPos = rowsArray[i].search(',');
        row += '"' + rowsArray[i].slice(0, commaPos) + '": "' + rowsArray[i].slice(commaPos + 1).replace(/^"/,'').replace(/"$/, '') + '",\n';
    }

    // add '{}', cut ',\n'

    json = '{\n' + row.slice(0,-2) + '\n}\n';
    
    fs.writeFileSync(resultFile, json, "utf8");
}

var buff = fs.readFileSync(csvFile, "utf8");

CSVToJSONConvertor(buff)

    
