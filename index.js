require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const { schema } = require('./schema');

// Create the ApolloServer instance and pass in the transformed GraphQL schemas (Models) and resolvers (Controllers)
const server = new ApolloServer({
	subscriptions: false,
	schema,
	cacheControl: {
		defaultMaxAge: 3600000
	}
});

// Start listening to the ApolloServer for GraphQL queries like DiscoverMovies(relaseDate: 2019)
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
