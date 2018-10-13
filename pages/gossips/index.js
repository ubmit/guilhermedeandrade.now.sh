import styled from 'styled-components';
import Layout from '../../components/Layout';
import Link from 'next/link';
import butter from '../../dist/butterToken';

const Index = ({ gossips }) => (
  <Layout>
    <GossipsList>{renderGossips(gossips)}</GossipsList>
  </Layout>
);

Index.getInitialProps = async ({ query }) => {
  let page = query.page || 1;
  const resp = await butter.post.list({ page: page, page_size: 10 });
  return { gossips: resp.data.data };
};

const renderGossips = gossips => {
  return gossips.map(({ slug, title, created, summary }, index) => {
    const d = new Date(created);
    const createdDate = d.toLocaleDateString('pt-BR');

    return (
      <GossipLink
        key={index}
        slug={slug}
        title={title}
        created={createdDate}
        summary={summary}
      />
    );
  });
};

const GossipLink = ({ slug, title, created, summary }) => (
  <Link href={`/gossips/gossip?slug=${slug}`} as={`/gossips/${slug}`}>
    <Gossip>
      <CreatedDate>{created}</CreatedDate>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
    </Gossip>
  </Link>
);

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const CreatedDate = styled.div`
  font-size: 12px;
`;

const Summary = styled.div`
  font-size: 14px;
  font-style: italic;
`;

const Gossip = styled.li`
  display: flex;
  flex-direction: column;

  :not(:first-child) {
    margin-top: 1em;
  }

  :hover {
    color: gold;
    text-shadow: 0px 2px 2px rgba(0, 255, 255, 0.3);
  }

  div:not(:first-child) {
    margin-top: 0.1em;
  }
`;

const GossipsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export default Index;
