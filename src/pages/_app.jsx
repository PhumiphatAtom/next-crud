import "../../styles/globals.css";

import Layout from "../components/layout";
import { CookiesProvider } from "react-cookie";

export default function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
  );
}
