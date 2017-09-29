const localtunnel = require('localtunnel');

localtunnel(5001, { subdomain: 'sallasap'}, function(err, tunnel) {
    console.log('LT running');
});