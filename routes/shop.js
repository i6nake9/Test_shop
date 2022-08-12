const path = require('path');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
