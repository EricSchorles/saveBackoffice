import { GraphQLClient } from 'graphql-request';
import { parseCookies } from 'nookies';

export const graphqlRequestClient = () => {
    const endpoint =
        `${process.env.NEXT_PUBLIC_URL}/admin-api` || 'http://localhost:3000/admin-api';

    const {
        ['vendure.token']: token,
        ['channel.token']: channelToken
    } = parseCookies();

    return new GraphQLClient(endpoint, {
        headers() {
            return {
                ...(channelToken ? { 'vendure-token': channelToken } : {}),
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            };
        },
    });
};
