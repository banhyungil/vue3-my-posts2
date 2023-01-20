const os = require("os")
const nets = os.networkInterfaces();

console.dir(nets)
console.log('os.hostname', os.hostname()); 

