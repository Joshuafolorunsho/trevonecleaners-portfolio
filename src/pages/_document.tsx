import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@600;700;900&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/assets/logo.png" />
      </Head>
      <body className="font-open-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
