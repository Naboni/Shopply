import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import apolloClient from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";

import { Layout } from "antd";
const { Content } = Layout;

import Navbar from "../components/common/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <>
        <Navbar />
        <Content>
          <Component {...pageProps} />
        </Content>
      </>
    </ApolloProvider>
  );
}

export default MyApp;
