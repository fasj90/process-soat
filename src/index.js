// firebaseAdmin.initializeApp({
//     credential:firebaseAdmin.credential.cert(serviceAccount),
//     databaseURL: "https://test-project-71f18.firebaseio.com"
// });

const seneca = require('seneca');
const microservice = require('./actions');
const config = require('../config/seneca.json');

const PORT = process.env.PORT || 3000;
const server = seneca(config);
server.use(microservice)
.listen({type: 'http', port: PORT, pin: 'role:process-soat'});