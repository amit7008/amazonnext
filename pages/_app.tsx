import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
<>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />

<Header />
<Component {...pageProps} />
<Footer />
</>
  )
}
