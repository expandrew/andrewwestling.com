import Head from 'next/head';

export const Meta = ({
  title,
  description = 'Andrew M Westling is a software engineer in New York City.',
  date,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title && `${title} | `}andrewwestling.com</title>
        {date && <meta name="date" content={date} />}
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png?v=wAOwmp6R8l"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png?v=wAOwmp6R8l"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png?v=wAOwmp6R8l"
        />
        <link
          rel="manifest"
          href="/assets/favicon/site.webmanifest?v=wAOwmp6R8l"
        />
        <link
          rel="shortcut icon"
          href="/assets/favicon/favicon.ico?v=wAOwmp6R8l"
        />
        <meta name="apple-mobile-web-app-title" content="Andrew Westling" />
        <meta name="application-name" content="Andrew Westling" />
        <meta name="msapplication-TileColor" content="#050708" />
        <meta
          name="msapplication-config"
          content="/assets/favicon/browserconfig.xml?v=wAOwmp6R8l"
        />
        <meta name="theme-color" content="#050708" />
      </Head>
      {children}
    </>
  );
};
