import styled from 'styled-components';

export default ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  margin: 3rem auto;
  max-width: 800px;
  display: flex;
`;
