var fs = require('fs');

function JSONToCSVConvertor() {

	if (!!process.argv[2]) {

		var buff = fs.readFileSync(process.argv[2] + '.json', "utf8");
    var json = typeof buff != 'object' ? JSON.parse(buff) : buff;
    
    var csv = '';
    
    var row = "";
        
    //extract each row and convert it in string comma-seprated
    for (var index in json) {
        row += index + ',' + '"' + json[index] + '"' + '\r\n';
    }

     csv += row + '\r\n';

     fs.writeFileSync(process.argv[2] + '.csv', csv, "utf8");
	} else {
		console.log('enter json file');
	}

}

JSONToCSVConvertor()
    
