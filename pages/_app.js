import { ApolloProvider } from "@apollo/client";

import { useApollo } from "@/lib/apollo";

import "@/styles/simplegrid.css";
import "@/styles/normalize.css";
import "@/styles/global.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
