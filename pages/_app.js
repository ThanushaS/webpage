import '@/styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" />
       
     


  </Head>
 
  

  <Component {...pageProps} />

  <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
 
  <script async  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
  </>
  )
}
