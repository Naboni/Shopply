import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://shoplly-api.techawks.io/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
