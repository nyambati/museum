const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const multer = require('multer');
const shell = require('shelljs');

const API_URL = process.env.CHARTMUSEUM_URI + '/api/charts';
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, '/tmp/');
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname);
	}
});
const upload = multer({ storage });

app.use(cors());

app.get('/', (req, res) => {
	return res.json({
		message: 'Messsage'
	});
});

app.get('/charts', async (req, res) => {
	try {
		const response = await axios.get(API_URL);
		const charts = Object.keys(response.data).map((chart) => response.data[chart][0]);
		return res.json(charts);
	} catch (error) {
		res.json(error);
	}
});

app.post('/upload', upload.single('file'), (req, res) => {
	if (!process.env.CHARTMUSEUM_URI) {
		return res.json({
			error: 'Missing chart museum url'
		});
	}
	const data = shell.exec(`curl --data-binary "@${req.file.path}" ${process.env.CHARTMUSEUM_URI}/api/charts`);
	if (data.code != 0) {
		return res.json({
			error: 'Error uploading chart'
		});
	}

	return res.json({
		message: 'Upload successful'
	});
});
module.exports = app;
