import {
  SignInMutation,
  SignInMutationVariables,
} from '@utils/generated/graphql';
import { destroyCookie, setCookie } from 'nookies';

import { getErrorMessage } from '@utils/getErrorMessage';
import { gql } from 'graphql-request';
import { setItem } from '@lib/storage';

const LOGIN_REQUEST = gql`
  mutation Login(
      $username: String!
      $password: String!
      $rememberMe: Boolean
  ) {
      login(
          username: $username
          password: $password
          rememberMe: $rememberMe
      ) {
          ... on CurrentUser {
              __typename
              id
              identifier
              channels {
                  token
                  code
              }
          }

          ... on InvalidCredentialsError {
              __typename
              errorCode
              message
          }

          ... on NativeAuthStrategyError {
              __typename
              errorCode
              message
          }

          ... on ErrorResult {
              __typename
              errorCode
              message
          }
      }
  }
`;

export async function signIn({
  username,
  password,
  rememberMe,
}: SignInMutationVariables): Promise<{
  status: boolean;
  message: string;
}> {
  try {
    const endpoint =
      `${process.env.NEXT_PUBLIC_URL}/admin-api` ||
      'http://localhost:3000/admin-api';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: LOGIN_REQUEST,
        variables: {
          username,
          password,
          ...(rememberMe && { rememberMe }),
        },
      }),
    });

    const { data } = await response.json();
    const { login } = data as SignInMutation;

    destroyCookie(undefined, 'channel.token');

    if (login.__typename === 'CurrentUser') {
      const vendure_auth_token =
        response.headers.get('Vendure-Auth-Token');
      setItem('Vendure-Auth-Token', vendure_auth_token!);

      setCookie(undefined, 'vendure.token', vendure_auth_token!, {
        maxAge: 60 * 60 * 24, // 1 hour
      });

      const username = login?.identifier.split('@')[0];
      setCookie(undefined, 'channel.token', data.login.channels[0].token);
      setItem('channel-token', data.login.channels[0].token);

      return {
        status: true,
        message: 'Bem vindo ' + username,
      };
    }

    return {
      status: false,
      message:
        getErrorMessage(login)?.message || 'Erro ao autenticar usuário',
    };
  } catch (error: any) {
    return {
      status: false,
      message: error.message || 'Erro ao autenticar usuário',
    };
  }
}
