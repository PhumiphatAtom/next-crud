import Navbar from './Navbar';
import Footer from './Footer';
import { useCookies } from 'react-cookie';

export default function Layout({ checkAuth, children }) {
  const [cookies] = useCookies(['user', 'token']);
  if (process.browser && checkAuth) {
    if (!cookies.user || !cookies.token) {
      window.location.href = '/login';
      return <></>;
    }
  }
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
