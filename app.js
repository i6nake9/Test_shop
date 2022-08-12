const express = require('express');
const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(shopRouter);
app.use(adminRouter);

app.listen(3000, () => {
	console.log('Server is started');
});
