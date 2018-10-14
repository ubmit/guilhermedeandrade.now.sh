import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
  <Column>
    <Header />
    <Row>
      <Sidebar />
      <Content>{children}</Content>
    </Row>
    <Footer />
  </Column>
);

const Column = styled.div`
  /* sticky footer */
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Row = styled.div`
  margin: 3rem auto;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1; /* sticky footer */
`;

const Content = styled.div`
  flex: 70%;
`;
