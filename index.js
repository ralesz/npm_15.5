'use scrict';

var OSinfo = require('./modules/OSinfo');

// Enkodowanie przyjmowanych danych
process.stdin.setEncoding('utf-8');

// Ustawienie nasłuchiwania na zdarzenia odczytu
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if(input !== null) {
    	var instruction = input.toString().trim();
    	switch (instruction) {
    		case '/exit':
    			process.stdout.write('Quiting app!\n');
    			process.exit();
    			break;
		    case '/version':
				process.stdout.write("Version: " + process.version + ".\n" )
				break;
			case '/platform':
				process.stdout.write("\n" + "Platform: " + process.platform + "\n");
				break;
			case '/getOSinfo':
				OSinfo.print();
			break;
		default:
			process.stderr.write('Wrong instruction!\n');
    	}
    }
});


