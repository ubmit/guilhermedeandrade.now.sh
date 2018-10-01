import Layout from '../../components/Layout';
import Butter from 'buttercms';
const butter = Butter('8de2baa15d149154c11e3f486dce91ff6f31dbe8');

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
