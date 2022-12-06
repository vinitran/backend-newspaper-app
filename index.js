const express = require('express');
const sequelize = require('./databases/database');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require("./routes/route");

sequelize.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
});

const app = express();


const init_swagger = () => {
    const expressSwagger = require('express-swagger-generator')(app);

    let options = {
        explorer: true,
        swaggerDefinition: {
            info: {
                description: 'RESFULL API',
                title: 'RESFULL API',
                version: '1.0',
            },
            host: "localhost:5000",
            produces: [
                "application/json",
                "application/xml"
            ],
            schemes: ['http', 'https'],
            securityDefinitions: {
                JWT: {
                    type: 'apiKey',
                    in: 'headers',
                    name: 'authorization',
                    description: ""
                }
            }
        },
        basedir: __dirname,
        files: ['./routes/route.js']
    };
    expressSwagger(options);
};

init_swagger();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

router(app);
const SV_PORT = process.env.SV_PORT;
sequelize.sync().then(() => {

    app.listen(SV_PORT, console.log(`Server started on port ${SV_PORT}`));
}).catch(err => console.log("Error: " + err));