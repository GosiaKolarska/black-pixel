import "../src/app/globals.css";
import Head from "next/head";
import Layout from "../src/app/components/layout/Layout";
import global from "../src/app/data/global.json";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="icon"
          href="/favicon-dark.png"
          media="(prefers-color-scheme: light)"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-light.png"
          media="(prefers-color-scheme: dark)"
          type="image/png"
        />
        <title>{global.siteMetadata.title}</title>
        <meta name="robots" content="all" />
        <meta name="description" content={global.siteMetadata.description} />
        <meta name="keywords" content={global.siteMetadata.keywords} />
        <meta name="author" content={global.siteMetadata.author} />

        <meta property="og:title" content={global.siteMetadata.title} />
        <meta
          property="og:description"
          content={global.siteMetadata.description}
        />
        <meta property="og:image" content="http://blackpixel.art/meta.png" />
        <meta property="og:url" content="http://blackpixel.art/" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
