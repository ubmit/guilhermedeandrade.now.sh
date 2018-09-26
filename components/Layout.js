import styled from 'styled-components';
import Sidebar from './Sidebar';

export default ({ children }) => (
  <Wrapper>
    <Sidebar />
    <Main>{children}</Main>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 3rem auto;
  max-width: 800px;
  display: flex;
`;

const Main = styled.div`
  flex: 70%;
`;
