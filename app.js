const scanner = require('node-wifi-scanner');

scanner.scan((err, networks) => {
  if (err) {
    console.error(err);
    return;
  }
  networks.forEach((d,i)=>{

    //console.log(d)
        console.log(i + ' Kanal: '+ d.channel + ' SSID : ' + d.ssid + '\n' )
  })
});