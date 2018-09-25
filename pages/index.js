import Link from 'next/link';
import styled from 'styled-components';

export default () => (
  <Table>
    <tbody>
      <tr>
        <Cell>
          <SayMyName>Guilherme de Andrade</SayMyName>
        </Cell>
      </tr>
      <tr>
        <Cell>
          <Anchor>Web Developer</Anchor>
        </Cell>
      </tr>
      <tr>
        <Cell>
          <Link href="/about">
            <Anchor>About </Anchor>
          </Link>
          <Link href="/blog">
            <Anchor>Blog </Anchor>
          </Link>
        </Cell>
      </tr>
    </tbody>
  </Table>
);

const Anchor = styled.a`
  text-decoration: none;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  &:hover {
    color: cyan;
  }
`;

const SayMyName = styled.span`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  &:hover {
    color: gold;
  }
`;

const Table = styled.table`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
`;

const Cell = styled.td`
  padding-bottom: 0.5em;
`;
