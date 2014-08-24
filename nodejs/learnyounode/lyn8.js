var net = require("net");

function prependZeros(num, digits){
	var str = String(num);
	for(i=0;i<(digits-Math.log(num)/Math.log(10)-1);i++){
		str = "0"+str;
	}
	return str;
};

net.createServer(function(socket){
	date = new Date();
	data = "";//YYYY-MM-DD hh:mm
	//data = data+"\"";
	var pz = prependZeros;
	data = pz(date.getFullYear(),4)+'-'+pz(date.getMonth()+1,2)+'-'+pz(date.getDate(),2)+' '+pz(date.getHours(),2)+':'+pz(date.getMinutes(),2)+'\n';
	socket.write(data);
	socket.end();
}).listen(process.argv[2]);