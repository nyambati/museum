'use strict';
const shell = require('shelljs');
const Config = use('Config');
const museumUrl = Config.get('app.museum.url');
const axios = require('axios');
const Logger = use('Logger');

class ChartController {
	async store({ request, response }) {
		try {
			const files = request.file('charts');
			const errors = [];
			for (let file of files._files) {
				Logger.info(`Uploading chart ${file.clientName}`);
				const data = shell.exec(`curl -Ls --data-binary @${file.tmpPath} ${museumUrl}/api/charts`);
				if (data.code !== 0) {
					errors.push(file.clientName);
					Logger.error(`Chart ${file.clientName} uploaded failed`);
					continue;
				}
				const error = JSON.parse(data.stdout)['error'];
				if (error) errors.push(file.clientName);
				Logger.info(`Chart ${file.clientName} uploaded successfully`);
			}

			if (errors.length > 0) {
				return { message: `Error occured uploading these charts (${errors.join(',')})` };
			}

			return { message: 'Upload was completed successfully' };
		} catch (e) {
			Logger.error(e.message);
			response.status(500).json({ message: e.message });
		}
	}

	async index({ response }) {
		const endpoint = `${museumUrl}/api/charts`;
		try {
			const { data } = await axios.get(endpoint);
			return Object.keys(data).map((key) => data[key][0]);
		} catch (error) {
			Logger.error(error.message);
			return response.status(500).json({ message: error.message });
		}
	}

	async show({ params, request }) {
		const { version } = request.get();
		const endpoint = `${museumUrl}/api/charts/${params.id}/${version || ''}`;
		try {
			const { data } = await axios.get(endpoint);
			return data;
		} catch (error) {
			Logger.error(error);
			return { message: error.message };
		}
	}

	async destroy({ params, request }) {
		const { version } = request.get();
		const endpoint = `${museumUrl}/api/charts/${params.id}/${version}`;
		try {
			const { data } = await axios.delete(endpoint);
			return data;
		} catch (error) {
			Logger.error(error.message);
			return { message: error.message };
		}
	}
}

module.exports = ChartController;
