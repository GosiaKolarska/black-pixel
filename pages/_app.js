import "../src/app/globals.css";
import Head from "next/head";
import Layout from "../src/app/components/layout/Layout";
import CookieConsent from "../src/app/components/cookies/CookieConsent";
import global from "../src/app/data/global.json";
import Script from "next/script";

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

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TD7GTQ6TF9`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TD7GTQ6TF9');
        `}
        </Script>
      </Head>
      <Component {...pageProps} />
      <CookieConsent />
    </Layout>
  );
}

export default MyApp;
