exports.getIndex = (req, res, next) => {
    res.render('index', {
	pageTitle: 'Começo do TCC',
	path: '/',
    });
};
