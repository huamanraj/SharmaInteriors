import Head from 'next/head'
import './global.css';
import icon from '../../public/images/logo1.png'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sharma Interior</title>
        <link rel="icon" href="" />
        <meta name="description" content="Your site description" />
        {/* Add other global meta tags here */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp