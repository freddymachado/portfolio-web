import '../styles/globals.css'
import Head from "next/head";
import 'bootswatch/dist/cosmo/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="keywords" content="Freddy Machado, Freddy Machado developer" />
		    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="Freddy Machado"></meta>          
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
