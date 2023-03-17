// Example Avahi name: rpi-climate-sensor-prom-export-mylocation

const dnssd = require('dnssd');

function startService(serviceName, serviceType, port) {
    const service = new dnssd.Advertisement(dnssd.tcp(serviceType), port, {
        name: serviceName,
        txt: { version: '1.0.0' }
    });

    service.start();

    return service;
}

module.exports = startService;
