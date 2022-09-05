import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m Shu. I’m a software engineer and a translator
          (English/Japanese). You can contact me on{' '}
          <a href="https://twitter.com/lemhion1908" target="_blank">
            Twitter
          </a>
          .
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// `getStaticProps` only runs on the server-side. It will never run on the client-side.
// It won't even be included in the JS bundle for the browser. That means you can write
// code such as direct database queries without them being sent to browsers.
export async function getStaticProps() {
  // This is used to fetch external data and passed to Home Component
  const allPostsData = getSortedPostData();
  return {
    // the value of props key will be passed to the `Home` Component as a prop
    props: {
      allPostsData,
    },
  };
}
