import styled from 'styled-components';
import Layout from '../../components/Layout';
import Link from 'next/link';
import butter from '../../dist/butterToken';

const Index = ({ gossips }) => (
  <Layout>
    <Wrapper>
      <Message>Gossips</Message>
      <Gossips>{renderGossips(gossips)}</Gossips>
    </Wrapper>
  </Layout>
);

Index.getInitialProps = async ({ query }) => {
  let page = query.page || 1;

  const resp = await butter.post.list({ page: page, page_size: 10 });
  return { gossips: resp.data.data };
};

const renderGossips = gossips => {
  return gossips.map(({ slug, title }, index) => {
    return <GossipLink key={index} title={title} slug={slug} />;
  });
};

const GossipLink = ({ slug, title }) => (
  <li>
    <Link as={`/gossips/${slug}`} href={`/gossips/?slug=${slug}`}>
      <Anchor>{title}</Anchor>
    </Link>
  </li>
);

const Message = styled.div`
  color: whitesmoke;
  font-size: 2rem;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  transition: all 100ms linear;
  margin-bottom: 2rem;

  :hover {
    color: gold;
    text-shadow: 2px 4px 3px rgba(0, 255, 255, 0.3);
  }
`;

const Wrapper = styled.div`
  display: block;
  text-align: center;
`;

const Anchor = styled.a`
  text-decoration: none;
  transition: all 100ms linear;
  :hover {
    color: gold;
    text-shadow: 0px 2px 2px rgba(0, 255, 255, 0.3);
  }
`;

const Gossips = styled.ul`
  text-align: left;
`;

export default Index;
