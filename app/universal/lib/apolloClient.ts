import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // set to true for SSR
    link: new HttpLink({
      uri: 'YOUR-SLASH-ENDPOINT',
    }),
    cache: new InMemoryCache(),
  });
}

type InitialState = object | null;

export function initializeApollo(initialState: InitialState) {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }

  // If your page has Next.js data fetching methods that use Apollo Client, the
  // initial state gets hydrated here.
  if (initialState) {
    // Get existing cache, loaded during client side data fetching.
    const existingCache = apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // Always create a new Apollo Client for SSG and SSR.
  if (typeof window === 'undefined') return apolloClient;

  return apolloClient;
}

export function useApollo(initialState: InitialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
