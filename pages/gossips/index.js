import Link from 'next/link';
import styled from 'styled-components';
import Emoji from '../../components/Emoji';

import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';

export default () => (
  <Layout>
    <Sidebar />
    <Main>
      <Wrapper>
        <Message>coming soon!</Message>
        <iframe
          src="https://giphy.com/embed/lJNoBCvQYp7nq"
          width="300"
          height="300"
          frameBorder="0"
        />
      </Wrapper>
    </Main>
  </Layout>
);

const Message = styled.div`
  color: whitesmoke;
  font-size: 2rem;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  transition: all 100ms linear;
  margin-bottom: 2rem;

  :hover {
    color: gold;
  }
`;

const Wrapper = styled.div`
  display: block;
  text-align: center;
`;
