// Reviews resolvers
const { MovieReviewResolver, ShowReviewResolver } = require('./Reviews');

// Cast resolvers
const { MovieCastResolver, ShowCastResolver } = require('./Cast');

// Crew resolvers
const { MovieCrewResolver, ShowCrewResolver } = require('./Crew');

// Recommendation resolvers
const { MovieRecommendationsResolver, ShowRecommendationsResolver } = require('./Recommendations');

// Keyword resolver
const { MovieKeywordResolver, ShowKeywordResolver } = require('./Keywords');

// Social resolver
const { MovieSocialResolver, ShowSocialResolver, PersonSocialResolver } = require('./Social');

// Search for a movie/show resolvers
const {
	SearchForAMovieResolver,
	SearchForAShowResolver,
	SearchForAPersonResolver
} = require('./SingleItemLookup');

// Discover resolvers
const { DiscoverMoviesResolver, DiscoverShowsResolver } = require('./Discover');

// Popular resolvers
const { PopularShowsResolver, PopularMoviesResolver, PopularPeopleResolver } = require('./Popular');

// NowPlaying resolvers
const { NowPlayingShowsResolver, NowPlayingMovieResolver } = require('./NowPlaying');

// Upcoming resolvers
const { UpcomingShowsResolver, UpcomingMoviesResolver } = require('./Upcoming');

// TopRated resolvers
const { TopRatedMoviesResolver, TopRatedShowsResolver } = require('./TopRated');

// Video resolvers
const { MovieVideoResolver, ShowVideoResolver } = require('./Videos');

// Credits resolver
const { CreditsResolver } = require('./Credits');

const resolvers = {
	// Additional data for the single movie object
	Movie: {
		reviews: MovieReviewResolver,
		featuredCast: MovieCastResolver,
		featuredCrew: MovieCrewResolver,
		recommendations: MovieRecommendationsResolver,
		keywords: MovieKeywordResolver,
		social: MovieSocialResolver,
		featuredVideo: MovieVideoResolver
	},

	// Additional data for the single show object
	Show: {
		reviews: ShowReviewResolver,
		featuredCast: ShowCastResolver,
		featuredCrew: ShowCrewResolver,
		recommendations: ShowRecommendationsResolver,
		keywords: ShowKeywordResolver,
		social: ShowSocialResolver,
		featuredVideo: ShowVideoResolver
	},

	// Additional data for the single person object
	Person: {
		credits: CreditsResolver,
		social: PersonSocialResolver
	},

	// Root query
	Query: {
		// SingleItemLookup
		SearchForAMovie: SearchForAMovieResolver,
		SearchForAShow: SearchForAShowResolver,
		SearchForAPerson: SearchForAPersonResolver,

		// Discover
		DiscoverMovies: DiscoverMoviesResolver,
		DiscoverShows: DiscoverShowsResolver,

		// Popular
		PopularMovies: PopularMoviesResolver,
		PopularShows: PopularShowsResolver,
		PopularPeople: PopularPeopleResolver,

		// NowPlaying
		NowPlayingShows: NowPlayingShowsResolver,
		NowPlayingMovies: NowPlayingMovieResolver,

		// Upcoming resolvers
		UpcomingShows: UpcomingShowsResolver,
		UpcomingMovies: UpcomingMoviesResolver,

		// Top rated resolvers
		TopRatedMovies: TopRatedMoviesResolver,
		TopRatedShows: TopRatedShowsResolver
	}
};

module.exports = {
	RootQuery: resolvers
};
