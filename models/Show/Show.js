const { gql } = require('apollo-server');

const typeDef = gql`
	type Show {
		backdrop_path: String
		created_by: [CreatedBy]
		episode_run_time: String
		genres: [Genre]
		homepage: String
		id: Int
		in_production: Boolean
		languages: [String]
		last_air_date: String
		last_episode_to_air: LastEpisodeToAir
		name: String
		next_episode_to_air: LastEpisodeToAir
		networks: [Network]
		number_of_episodes: Int
		number_of_seasons: Int
		origin_country: [String]
		original_language: String
		original_name: String
		overview: String
		popularity: Int
		poster_path: String
		production_companies: [Company]
		seasons: [Season]
		status: String
		type: String
		vote_average: Int
		vote_count: Int
		reviews: [Review]
		recomendations: [Shows]
		keywords: [Keyword]
		social: Social
		cast: [Cast]
		crew: [Crew]
		videos: [Video]
		current_season: CurrentSeason
		releaseDate: String
	}
`;

module.exports = typeDef;