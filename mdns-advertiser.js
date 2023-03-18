// Example Avahi name: rpi-climate-sensor-prom-export-mylocation
// To use this module in other projects, such as tempt-sensor
// npm pack
// cp mdns-module-1.0.0.tgz ../tempt-sensor/
//
// In order to run npm install on RPi for mdns/dnssd, this command will likely be required:
// apt-get install libavahi-compat-libdnssd-dev

const dnssd = require('dnssd');

function startService(serviceName, serviceType, port) {
    const service = new dnssd.Advertisement(dnssd.tcp(serviceType), parseInt(port), {
        name: serviceName,
        txt: { version: '1.0.0' }
    });

    service.start();

    return service;
}

module.exports = startService;
