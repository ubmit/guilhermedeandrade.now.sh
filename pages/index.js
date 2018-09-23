import Head from 'next/head';
import Link from 'next/link';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <style jsx global>{`
      body {
        background: purple;
        font-size: 20px;
        font-family: menlo;
        color: whitesmoke;
      }
    `}</style>

    <Content />
  </div>
);

const Content = () => (
  <div>
    <style jsx>{`
      table {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      td {
        padding-bottom: 0.5em;
      }

      td span {
        font-size: 30px;
        font-weight: bold;
        text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
          0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);
      }

      td span:hover {
        color: gold;
      }

      a {
        text-decoration: none;
        color: whitesmoke;
      }

      a:hover {
        color: cyan;
      }
    `}</style>

    <table>
      <tbody>
        <tr>
          <td>
            <span>Guilherme de Andrade</span>
          </td>
        </tr>

        <tr>
          <td>
            <a>Web Developer</a>
          </td>
        </tr>

        <tr>
          <td>
            <Link href="/about">
              <a>About </a>
            </Link>
            <Link href="/blog">
              <a>Blog </a>
            </Link>
            <Link href="https://github.com/ubmit">
              <a>GitHub</a>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
