const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 3001;

app.use(express.static('./public'));

app.use(express.urlencoded({
    extended: true,
}));

app.set('view engine', 'ejs');
app.use(routes);
app.use(cors());

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});