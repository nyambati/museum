const axios = require('axios');
const shell = require('shelljs');
const { CHART_MUSEUM_URL } = process.env;

const findAll = async (req, res) => {
	try {
		const { data } = await axios.get(`${CHART_MUSEUM_URL}/api/charts`);
		// return the first chart in the list
		const charts = Object.keys(data).map((name) => data[name][0]);
		return res.json(charts);
	} catch (err) {
		res.status(500).json(err);
	}
};

const uploadFile = (file) => {
	console.log(`Uploading chart ${file.originalname}`);
	return shell.exec(`curl --data-binary "@${file.path}" ${CHART_MUSEUM_URL}/api/charts`);
};

const upload = async (req, res) => {
	const { files } = req;
	shell.config.fatal = true;
	shell.config.silent = true;
	const errors = [];

	for (file of files) {
		const data = uploadFile(file);
		const error = JSON.parse(data.stdout)['error'];
		if (error) errors.push(error);
	}

	//
	if (errors) return res.json({ errors });
	return res.json({ message: 'Upload successful' });
};

const destroy = async (req, res) => {
	try {
		const { name, version } = req.params;
		const { data } = await axios.delete(`${CHART_MUSEUM_URL}/api/charts/${name}/${version}`);
		return res.json(data);
	} catch (error) {
		return res.json({ error: error.message });
	}
};

const findByName = async (req, res) => {
	try {
		const { name } = req.params;
		const { data } = await axios.get(`${CHART_MUSEUM_URL}/api/charts/${name}`);
		res.json(data);
	} catch (error) {
		return res.json({ error: error.message });
	}
};

const findByVersion = async (req, res) => {
	try {
		const { name, version } = req.params;
		const { data } = await axios.get(`${CHART_MUSEUM_URL}/api/charts/${name}/${version}`);
		res.json(data);
	} catch (error) {
		return res.json({ error: error.message });
	}
};

module.exports = {
	findAll,
	findByName,
	findByVersion,
	destroy,
	upload
};
