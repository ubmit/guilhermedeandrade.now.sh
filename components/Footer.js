import styled from 'styled-components';
import Link from 'next/link';

export default () => (
  <Wrapper>
    <Link href="https://buttercms.com/">
      <a>
        <Butter src="../static/images/butter.png" alt="butterCMS-logo" />
      </a>
    </Link>
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  opacity: 0.8;
  background: purple;
`;

const Butter = styled.img`
  opacity: 0.8;
  height: 30px;

  :hover {
    opacity: 1;
  }
`;
