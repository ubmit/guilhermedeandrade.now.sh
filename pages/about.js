import styled from 'styled-components';
import Link from 'next/link';

export default () => (
  <Layout>
    <Side>
      <Link href="/">
        <Avatar src="/static/images/avatar.jpg" alt="avatar" />
      </Link>
      <Quote>
        When I'm not writing JavaScript code, I'm building a keyboard
      </Quote>
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
    </Side>
    <Main>
      <Paragraph>
        Hi! I'm <span>Guilherme</span> and I live in{' '}
        <span>Porto, Portugal</span>. <span>I'm a really curious person</span>{' '}
        and the curiosity has led me to <span>Web Development</span>! Which is
        really awesome, since the web world never sleeps and there are always
        new technologies to dive into. I've finally found the perfect career to
        feed my huge curiosity.
      </Paragraph>
      <Paragraph>
        At the moment I'm focusing on <span>React</span> and its ecosystem, but
        I have already worked with <span>Ruby on Rails</span> and{' '}
        <span>AngularJS</span>. Lately I've been studying and playing around a
        lot with <span>Next.js</span> and <span>styled-components</span>.
        Another technology I'm looking forward to learning is{' '}
        <span>GraphQL</span>.
      </Paragraph>
      <Paragraph>
        Along with development, I'm doing a{' '}
        <span>masters degree in Electronic and Computers Engineering</span>,
        learning how to cook, trying to understand what the Portuguese people
        say and <span>building keyboards</span> in my free time.
      </Paragraph>
    </Main>
  </Layout>
);

const Layout = styled.div`
  margin: 3rem auto;
  max-width: 800px;
  display: flex;
`;

const Side = styled.div`
  flex: 30%;
  text-align: center;
  margin-right: 3rem;
`;

const Avatar = styled.img`
  margin: 1rem auto;
  width: 200px;
  height: 200px;
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

const Main = styled.div`
  flex: 70%;
`;

const Paragraph = styled.p`
  span :hover {
    color: gold;
  }
`;
