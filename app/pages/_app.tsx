import { ApolloProvider } from '@apollo/client';
import React from 'react';

import { useApollo } from '../universal/lib/apolloClient';

type Props = {
  Component: React.ElementType;
  pageProps: {
    initialApolloState: {}; // TODO: Refine this type
  };
};

export default function App({ Component, pageProps }: Props) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
