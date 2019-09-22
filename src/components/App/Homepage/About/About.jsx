import React, { memo } from 'react';

const About = () => {
  return (
    <div className="c-about">
      <h3>So what it is?</h3>
      <div>
        &emsp;The Flipcoin is, as mentioned above, an online tool to settle
        disputes with other people fairly. Want to play a game and throw a coin
        whether or not the game You are going to play is Your, or Your
        friend&apos;s favourite? If that&apos;s the case then You&apos;re in the
        right place! As opposed to what the name implies, a coin tossing is only
        a part of the functionality. There are multiple roll types possible,
        with defaults based on typical dices(D4, D6, D8, D10, D12, D20, D100) or
        custom ranges to roll from. You can basically use this site to host Your
        DnD session, although there are many sites adapted for that purpose.
      </div>
    </div>
  );
};

export default memo(About);
