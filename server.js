const db = require('./db');
const config = require('./src/config/env.config');
const router = require('./src/API/components/router');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
console.log(config);
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(bodyParser.json());
app.use(morgan(config.format_logs));
app.use(cors());
router(app);
app.listen(config.port, () => {
    console.log(`listening on port ${config.port} in ${config.node_env} mode`);
});