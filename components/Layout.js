import styled from 'styled-components';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <Row>
      <Sidebar />
      <Content>{children}</Content>
    </Row>
    <Footer />
  </div>
);

const Row = styled.div`
  margin: 3rem auto;
  max-width: 800px;
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  flex: 70%;
`;
