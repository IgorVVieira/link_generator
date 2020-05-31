const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.render('index', {
        baseUrl: ""
    });
});

routes.post('/send', (req, res) => {
    const {
        phone,
        text
    } = req.body;

    const templateUrl = (phone, text) => {
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
        return url;
    }

    let baseUrl = templateUrl(phone, text);
    return res.render('index', {
        baseUrl
    });
});

module.exports = routes;