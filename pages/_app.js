import { ApolloProvider } from "@apollo/client";

import { useApollo } from "@/lib/apollo";

import { GlobalStyle } from "@/styles/global";
import { Normalize } from "@/styles/normalize";
import { SimpleGrid } from "@/styles/simplegrid";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Normalize />
      <SimpleGrid />
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
