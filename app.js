const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const bodyParser = require('body-parser');
const getError = require('./controllers/error');

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRouter);
app.use('/admin', adminRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use(getError.get404);

app.listen(3000, () => {
	console.log('Server is started');
});
