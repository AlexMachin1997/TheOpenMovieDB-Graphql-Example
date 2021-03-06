const axios = require('axios');

const generateKeywordEndpoint = require('../../utils/generateEndpoints/Keywords');

// eslint-disable-next-line no-unused-vars
const MovieKeywordResolver = async (parent, args, info, context) => {
	try {
		// Make a keywords request using the Movie object id field
		const response = await axios.get(generateKeywordEndpoint(parent.id, 'movie'));

		return response.data.keywords;
	} catch (err) {
		console.log('The /keywords endpoint failed');
		return err;
	}
};

module.exports = MovieKeywordResolver;
