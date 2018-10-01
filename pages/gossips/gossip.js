import Layout from '../../components/Layout';
import butter from '../../dist/butterToken';

const Gossip = ({ gossip: { title, body } }) => (
  <Layout>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </Layout>
);

Gossip.getInitialProps = async ({ query }) => {
  // const { slug } = query;
  const slug = 'example-post';
  const resp = await butter.post.retrieve(slug);
  return { gossip: resp.data.data };
};

export default Gossip;
