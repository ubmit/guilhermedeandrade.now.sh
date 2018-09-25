import Link from 'next/link';
import styled from 'styled-components';
import Emoji from '../../components/Emoji';

export default () => (
  <Layout>
    <Link href="/">
      <Message>
        coming soon <Emoji symbol="✨" label="sparks-emoji" />
      </Message>
    </Link>
  </Layout>
);

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Message = styled.div`
  color: whitesmoke;
  font-size: 3rem;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  transition: all 100ms linear;

  :hover {
    color: gold;
  }
`;
