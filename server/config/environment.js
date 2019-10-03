const requiredEnvs = [ 'CHART_MUSEUM_URL' ];

const envs = Object.keys(process.env).filter((env) => env.startsWith('CHART'));

for (env of requiredEnvs) {
	if (!envs.includes(env)) throw Error(`Missing required environment ${env}`);
}
