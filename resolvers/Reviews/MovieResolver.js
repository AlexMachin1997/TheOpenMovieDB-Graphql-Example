const axios = require("axios");

const { generateReviewEndpoint } = require("../../utils/generateEndpoints");

const MovieReviewsResolver = async (parent, args, context, info) => {
  try {
    // Make a review request using the Movie object id field
    const response = await axios.get(
      generateReviewEndpoint(parent.id, "movie")
    );

    return response.data.results;
  } catch (err) {
    console.log("The /reviews endpoint failed");
    return err.response;
  }
};

module.exports = MovieReviewsResolver;
