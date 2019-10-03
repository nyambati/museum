const Router = require('express').Router();
const multer = require('multer');
const charts = require('charts/controller');

const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, '/tmp/'),
	filename: (req, file, cb) => cb(null, file.originalname)
});

const upload = multer({ storage: storage });

Router.route('/').get(charts.findAll).post(upload.array('files'), charts.upload).delete(charts.destroy);
Router.route('/:name').get(charts.findByName);
Router.route('/:name/:version').get(charts.findByVersion);

module.exports = Router;
