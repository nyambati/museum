const faker = require('faker');

module.exports = () => {
	const size = process.env.DATA_SIZE || 12;
	const api = {
		charts: []
	};

	for (let i = 0; i < size; i++) {
		api.charts.push({
			id: faker.random.uuid(),
			name: faker.lorem.word(),
			icon: '',
			versions: [ faker.system.semver() ]
		});
	}
	return api;
};
