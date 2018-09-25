import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: linear-gradient(340deg, purple, #991346);
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    width: 100%;
    height: 100%;
    color: whitesmoke;
    -webkit-font-smoothing: antialiased;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>
            Guilherme de Andrade - Frontend Development, JavaScript, React
          </title>
          {this.props.styleTags}

          <script defer src="/static/icons/icons.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
