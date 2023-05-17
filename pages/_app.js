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

  <script async src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  </>
  )
}
