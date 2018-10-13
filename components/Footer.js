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
`;

const Butter = styled.img`
  opacity: 1;
  height: 30px;

  :hover {
    opacity: 0.8;
  }
`;
