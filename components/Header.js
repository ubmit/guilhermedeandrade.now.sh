import Link from 'next/link';
import styled from 'styled-components';

export default () => (
  <Wrapper>
    <li>
      <Link href="/">
        <a>about</a>
      </Link>
    </li>
    <a>·</a>
    <li>
      <Link href="/gossips">
        <a>gossips</a>
      </Link>
    </li>
  </Wrapper>
);

const Wrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;

  a {
    padding: 0.5em 0.5em;
    display: block;
    text-decoration: none;
    color: whitesmoke;
    transition: all 100ms linear;
  }

  a:nth-child(2n + 1):hover {
    color: gold;
    text-shadow: 0px 2px 2px rgba(0, 255, 255, 0.3);
  }
`;
