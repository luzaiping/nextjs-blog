import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script'
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* Note: Script component should not be wrapped in Head component */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}

// Because `getServerSideProps` is called at request time, its parameter(`context`)
// contains request specific parameters.
// You should use `getServerSideProps` only if you need to pre-render a page whose data
// must be fetched at request time. Time to first byte(TTFB) will be slower that `getStaticProps`
// because the server must compute the result on every request, and the result cannot be cached by
// a CDN without extra configuration.
export function getServerSideProps({ context }) {
  return {
    props: {
      // props for your component
    }
  }
}