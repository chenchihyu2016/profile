import {
    ApolloClient,
    InMemoryCache,
    split,
    HttpLink
} from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://even-cat-movie-graphql.herokuapp.com/subscriptions'
    })
);

const httpLink = new HttpLink({
    uri: 'https://even-cat-movie-graphql.herokuapp.com/graphql'
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});

export default apolloClient;
