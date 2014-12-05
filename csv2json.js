var fs = require('fs');


function CSVToJSONConvertor() {
    if (!!process.argv[2]) {
        var buff = fs.readFileSync(process.argv[2] + '.csv', "utf8");
        // split to array
        var rowsArray = buff.split('\n');
        var row = '';
        var json = '';

        for (var i = 0; i < rowsArray.length; i++) {
            var commaPos = rowsArray[i].search(',');
            row += '"' + rowsArray[i].slice(0, commaPos) + '": "' + rowsArray[i].slice(commaPos + 1).replace(/^"/,'').replace(/"$/, '') + '",\n';
        }

        // add '{}', cut ',\n'

        json = '{\n' + row.slice(0,-2) + '\n}\n';
        
        fs.writeFileSync(process.argv[2] + '.json', json, "utf8");
    } else {
        console.log('enter csv file');
    }
}



CSVToJSONConvertor()

    
