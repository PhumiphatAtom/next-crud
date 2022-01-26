import '../../styles/globals.css';
import { CookiesProvider } from 'react-cookie';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <CookiesProvider>{getLayout(<Component {...pageProps} />)}</CookiesProvider>
  );
}
