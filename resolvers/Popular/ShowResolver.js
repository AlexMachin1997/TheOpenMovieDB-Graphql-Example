const axios = require("axios");
const { has, forEach } = require("lodash");

const { generatePopularEndpoint } = require("../../utils/generateEndpoints");
const generateImageURL = require("../../utils/generateImageURL");
const formatDate = require("../../utils/dates/custom");

const TVPopularResolver = async (parent, args, context, info) => {
  try {
    // Send a request to the popular movies endpoint
    const response = await axios.get(generatePopularEndpoint("tv"));

    const { data } = response;
    const { results } = data;

    // Transform the data
    forEach(results, (show) => {
      if (has(show, "poster_path") === true) {
        const { poster_path } = show;
        data.poster_path = generateImageURL(poster_path);
      }

      if (has(show, "backdrop_path") === true) {
        const { backdrop_path } = show;
        data.backdrop_path = generateImageURL(backdrop_path);
      }

      if (has(show, "first_air_date") === true) {
        const { first_air_date } = show;
        data.first_air_date = formatDate(first_air_date, "MMMM Do, YYYY");
      }
    });

    return results;
  } catch (err) {
    console.log("The /tv/popular endpoint failed");
    return err.response;
  }
};

module.exports = TVPopularResolver;
