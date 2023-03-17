const startService = require('mdns-module');
const dnssd = require('dnssd');

describe('mdns-module', () => {
    it('should start service and return instance of Advertisement', () => {
        const instanceName = 'my-service';
        const serviceName = 'climate-http';
        const port = 3000;

        const service = startService(instanceName, serviceName, port);

        expect(service).toBeInstanceOf(dnssd.Advertisement);
        expect(service.instanceName).toBe(instanceName);
        expect(service.serviceName).toBe(`_${serviceName}`);
        expect(service.port).toBe(port);
    });
});
