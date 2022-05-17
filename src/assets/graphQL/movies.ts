import client from '@/apollo/index.js';
import { Movie } from '@/types/graphql/types';
import { gql } from '@apollo/client/core';

export type movieResponse = {
    data: {
        movie: Movie;
    };
};

export type moviesResponse = {
    data: {
        movie: Array<Movie>;
    };
};

export function getMovieById(id: number) {
    return client.query({
        query: gql`
            query ($id: Int!) {
                movie(id: $id) {
                    id
                    name
                    url
                }
            }
        `,
        variables: {
            id
        }
    });
}

export function getMovies() {
    return client.query({
        query: gql`
            query {
                movies {
                    id
                    name
                    url
                }
            }
        `
    });
}

export function subscribeMovie() {
    return client.subscribe({
        query: gql`
            subscription {
                movieEvent {
                    id
                    message
                    movieId
                    eventTime
                }
            }
        `
    });
}

export async function addMovie() {
    const movie = {
        company: 'new',
        url: 'test',
        name: 'hha'
    };
    const mutationA = gql`
        mutation ($movie: movieInput!) {
            addMovie(movie: $movie) {
                id
                url
                name
            }
        }
    `;

    return await client.mutate({
        mutation: mutationA,
        variables: { movie }
    });
}
