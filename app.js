const express = require('express');
const path = require('path');
const app = express();
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRouter);
app.use('/admin', adminData.routes);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
	console.log('Server is started');
});
