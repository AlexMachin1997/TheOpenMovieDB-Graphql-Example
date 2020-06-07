const axios = require('axios');

const generateSocialLinksEndpoint = require('../../utils/generateEndpoints/Social');

// eslint-disable-next-line no-unused-vars
const TVSocialResolver = async (parent, args, info, context) => {
	try {
		const response = await axios.get(generateSocialLinksEndpoint(parent.id, 'tv'));

		return response.data;
	} catch (err) {
		console.log('The TV /external_ids (social) endpoint failed');
		return err.response;
	}
};

module.exports = TVSocialResolver;
