import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';
import Emoji from '../components/Emoji';

export default () => (
  <Layout>
    <Paragraph>
      Hi! I'm <span>Guilherme</span> and I live in <span>Porto, Portugal</span>.{' '}
      <span>I'm a really curious person</span> and the curiosity has led me to{' '}
      <span>Web Development</span>! Which is really awesome, since the web world
      never sleeps and there are always new technologies to dive into. I've
      finally found the perfect career to feed my huge curiosity.
    </Paragraph>
    <Paragraph>
      At the moment I'm focusing on <span>React</span> and its ecosystem, but
      I've already worked with <span>Ruby on Rails</span>,{' '}
      <span>AngularJS</span> and <span>PostgreSQL</span>. Lately I've been
      studying and playing around a lot with <span>Next.js</span> and{' '}
      <span>styled-components</span>. Another technology I'm looking forward to
      learning is <span>GraphQL</span>.
    </Paragraph>
    <Paragraph>
      Along with development, I'm doing a masters degree in Electrical and
      Computers Engineering, learning how to cook, playing Futsal, trying to
      understand what the Portuguese people say and building keyboards in my
      free time.
    </Paragraph>
    <Paragraph>
      I'll also start to write some stuff
      <Link href="/gossips">
        <a> here</a>
      </Link>
      !
    </Paragraph>
  </Layout>
);

const Paragraph = styled.p`
  span {
    transition: all 100ms linear;
  }

  span :hover {
    color: gold;
    text-shadow: 0px 2px 2px rgba(0, 255, 255, 0.3);
  }

  a {
    text-decoration: none;
    color: whitesmoke;
    font-weight: bold;
    transition: all 100ms linear;
  }

  a :hover {
    color: gold;
    text-shadow: 0px 2px 2px rgba(0, 255, 255, 0.3);
  }
`;
