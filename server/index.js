const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

const API_URL = process.env.CHARTMUSEUM_URI + '/api/charts';

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
module.exports = app;
