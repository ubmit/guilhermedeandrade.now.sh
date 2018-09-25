import styled from 'styled-components';
import Link from 'next/link';
import Emoji from '../components/Emoji';

export default () => (
  <Layout>
    <Side>
      <Link href="/">
        <Avatar src="https://i.imgur.com/BjAVDPh.jpg?1" alt="avatar" />
      </Link>
      <Quote>
        When I'm not writing JavaScript code, I'll be building a keyboard
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla
        malesuada pellentesque elit eget. Iaculis at erat pellentesque
        adipiscing commodo elit at. Velit dignissim sodales ut eu sem integer
        vitae justo. Lorem mollis aliquam ut porttitor. Nibh praesent tristique
        magna sit. Est pellentesque elit ullamcorper dignissim cras. Erat velit
        scelerisque in dictum. Vulputate ut pharetra sit amet aliquam. Dui
        sapien eget mi proin sed. Egestas maecenas pharetra convallis posuere.
        Gravida arcu ac tortor dignissim convallis aenean et. In nibh mauris
        cursus mattis molestie. Ipsum nunc aliquet bibendum enim facilisis.
        Rutrum tellus pellentesque eu tincidunt. Facilisi etiam dignissim diam
        quis enim lobortis scelerisque fermentum dui. Ac turpis egestas maecenas
        pharetra convallis posuere. Aenean et tortor at risus viverra adipiscing
        at in. Auctor elit sed vulputate mi sit amet mauris. Urna et pharetra
        pharetra massa <Emoji symbol="✨" label="sparks-emoji" />
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
  font-size: 14px;
  font-style: italic;
`;

const Social = styled.div`
  margin-top: 1rem;
`;

const Icon = styled.i`
  font-size: 1.2rem;
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
  text-align: justify;
  text-justify: inter-word;
`;
