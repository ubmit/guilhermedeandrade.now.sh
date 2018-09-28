import styled from 'styled-components';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>{renderPosts(props)}</ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

const renderPosts = ({ shows }) => {
  return shows.map(({ show }) => {
    return <PostLink key={show.id} name={show.name} id={show.id} />;
  });
};

const PostLink = ({ id, name }) => (
  <li>
    <Link as={`/gossips/${id}`} href={`/gossips/?id=${id}`}>
      <Anchor>{name}</Anchor>
    </Link>
  </li>
);

const Anchor = styled.a`
  text-decoration: none;
  transition: all 100ms linear;

  :hover {
    color: gold;
    text-shadow: 0px 2px 2px rgba(0, 255, 255, 0.3);
  }
`;

export default Index;
