import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { getItem } from '@lib/storage';
import { createUploadLink } from 'apollo-upload-client';

const token = getItem('Vendure-Auth-Token');
const channelToken = getItem('channel-token');

const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_URL}/admin-api`,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${token}`,
        'vendure-token': channelToken ?? '',
    },
    link: createUploadLink({
        uri: `${process.env.NEXT_PUBLIC_URL}/admin-api`,
        headers: {
            Authorization: `Bearer ${token}`,
            'vendure-token': channelToken ?? '',
        },
    }),
});

export default client;
