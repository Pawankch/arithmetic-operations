const app = require('./app');
const serverless = require("aws-serverless-express")
const server = serverless.createServer(app);
// Lambda function handler
exports.handler = async (event, context) => {
    return serverless.proxy(server,event,context,'PROMISE').promise;
};
