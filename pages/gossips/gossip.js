import Layout from '../../components/Layout';
import butter from '../../dist/butterToken';
import styled from 'styled-components';

const Gossip = ({ gossip: { title, body } }) => (
  <Layout>
    <h1>{title}</h1>
    <Wrapper dangerouslySetInnerHTML={{ __html: body }} />
  </Layout>
);

Gossip.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const resp = await butter.post.retrieve(slug);
  return { gossip: resp.data.data };
};

const Wrapper = styled.div`
  line-height: 1.5em;
  text-align: justify;
  text-justify: inter-word;

  img {
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);

    :hover {
      opacity: 0.8;
    }
  }

  figcaption {
    text-align: center;
    margin-top: 0.5em;
    font-size: 14px;
    font-style: italic;
  }

  blockquote {
    margin: 0;
    text-align: center;
    font-style: italic;

    :hover {
      opacity: 0.8;
    }

    p {
      text-indent: 0;
    }
  }
`;

export default Gossip;
