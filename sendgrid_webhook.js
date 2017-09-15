const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'sallasap'}, function(err, tunnel) {
    console.log('LT running');
});