const { API_URI, API_VERSION, API_KEY } = require('../../../config');

/**
 * @param {string} resolverType
 * @returns {string}
 */
const generateDiscoverEndpoint = (resolverType) =>
	`${API_URI}/${API_VERSION}/discover/${resolverType}?api_key=${API_KEY}&page=1`;

module.exports = generateDiscoverEndpoint;
