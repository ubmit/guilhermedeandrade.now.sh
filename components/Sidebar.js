import styled from 'styled-components';
import Link from 'next/link';

export default () => (
  <Wrapper>
    <Link href="/">
      <Avatar src="/static/images/avatar.jpg" alt="avatar" />
    </Link>
    <Quote>When I'm not writing JavaScript code, I'm building a keyboard</Quote>
    <Social>
      <Link href="mailto:guilhermedeandrade@me.com">
        <a>
          <Icon className="fas fa-envelope" style={iconMargin} />
        </a>
      </Link>
      <Link href="https://github.com/ubmit">
        <a>
          <Icon className="fab fa-github" style={iconMargin} />
        </a>
      </Link>
      <Link href="https://twitter.com/ubmit">
        <a>
          <Icon className="fab fa-twitter" />
        </a>
      </Link>
    </Social>
  </Wrapper>
);

const Wrapper = styled.div`
  flex: 30%;
  text-align: center;
  margin-right: 2rem;
  flex-shrink: 0;
`;

const Avatar = styled.img`
  margin: 1rem auto;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  -webkit-border-radius: 99em;
  -moz-border-radius: 99em;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
  transition: all 100ms linear;

  :hover {
    opacity: 0.8;
  }
`;

const Quote = styled.div`
  font-size: 15px;
  font-style: italic;
`;

const Social = styled.div`
  margin-top: 1rem;
`;

const Icon = styled.i`
  font-size: 1.5rem;
  opacity: 0.6;
  transition: all 100ms linear;
  color: whitesmoke;

  :hover {
    opacity: 1;
  }
`;

const iconMargin = {
  marginRight: '1rem'
};
