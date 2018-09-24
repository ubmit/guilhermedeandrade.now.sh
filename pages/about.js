import styled from 'styled-components';
import Link from 'next/link';
import Emoji from '../components/Emoji';

export default () => (
  <Wrapper>
    <Link href="/">
      <Avatar src="http://i.imgur.com/xvVgOhz.jpg" alt="avatar" />
    </Link>
    <div>
      <Paragraph>
        Annoy the old grumpy cat, start a fight and then retreat to wash when i
        lose eat an easter feather as if it were a bird then burp victoriously,
        but tender leave hair everywhere. Plan steps for world domination cats
        making all the muffins but roll over and sun my belly damn that dog head
        nudges i just saw other cats inside the house and nobody ask me before
        using my litter box but sleep on my human's head. Cats are fats i like
        to pets them they like to meow back find a way to fit in tiny box
        yowling nonstop the whole night stares at human while pushing stuff off
        a table yet knock dish off table head butt cant eat out of my own dish
        chase after silly colored fish toys around the house instantly break out
        into full speed gallop across the house for no reason. Meow to be let in
        poop in a handbag look delicious and drink the soapy mopping up water
        then puke giant foamy fur-balls. Twitch tail in permanent irritation
        lick the curtain just to be annoying meow in empty rooms meow and walk
        away. <Emoji symbol="🐱" label="kitten" />
      </Paragraph>
    </div>
  </Wrapper>
);

const Avatar = styled.img`
  height: 200px;
  &:hover {
    opacity: 0.8;
  }
`;

const Wrapper = styled.div`
  margin: 3rem auto;
  max-width: 800px;
`;

const Paragraph = styled.p`
  font-size: 18px;
`;
