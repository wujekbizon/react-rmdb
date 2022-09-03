import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,500;0,700;1,200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-raleway">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
