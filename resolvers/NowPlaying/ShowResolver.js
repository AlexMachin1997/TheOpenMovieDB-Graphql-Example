const axios = require("axios");
const moment = require("moment");
const { has, forEach } = require("lodash");
const { genereateNowPlayingEndpoint } = require("../../config.js");

const NowPlayingTVResolver = async (parent, args, context, info) => {
  try {
    // 1. Send a request to the discover movies endpoint
    const response = await axios.get(genereateNowPlayingEndpoint("tv"));

    // 2. Destructure the response
    const { data } = response;
    const { results } = data;

    // 2. Transform the data where needed e.g. release_date, image url etc
    forEach(results, data => {
      const hasPosterPath = has(data, "poster_path");
      const hasBackdropPath = has(data, "backdrop_path");
      const hasReleaseDatePath = has(data, "release_date");

      if (hasPosterPath) {
        data.poster_path = `https://image.tmdb.org/t/p/original${data.poster_path}`;
      }
      if (hasBackdropPath) {
        data.backdrop_path = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;
      }

      if (hasReleaseDatePath) {
        data.release_date = moment(data.release_date).format("MMMM d, YYYY");
      }
    });

    // 3. Return the data
    return results;
  } catch (err) {
    console.log(err);
    console.log("The tv/on_the_air endpoint failed");
    return err.data;
  }
};

module.exports = NowPlayingTVResolver;
