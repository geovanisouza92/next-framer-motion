import cn from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import * as a from './Banner.animations';
import s from './Banner.module.scss';

export default function Banner() {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div className={s.banner} {...a.banner}>
      <BannerRowTop title="brand" />
      <BannerRowCenter title="experience" playMarquee={playMarquee} />
      <BannerRowBottom title="studio" />
    </motion.div>
  );
}

function BannerRowTop({ title }) {
  return (
    <div className={s.bannerRow}>
      <div className={s.rowCol}>
        <AnimatedLetters title={title} />
      </div>
      <motion.div className={s.rowCol} {...a.message}>
        <span className={s.rowMessage}>
          We are specialized in setting up the foundation of your brand and setting you up for success.
        </span>
      </motion.div>
    </div>
  );
}

function BannerRowCenter({ title, playMarquee }) {
  return (
    <div className={cn(s.bannerRow, s.marquee, { [s.animate]: playMarquee })}>
      <motion.div className={s.marqueeInner} {...a.title}>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
}

function BannerRowBottom({ title }) {
  return (
    <div className={cn(s.bannerRow, s.center)}>
      <motion.div className={s.scroll} {...a.scroll}>
        <motion.span {...a.scrollInner}>scroll</motion.span>
        <motion.span {...a.scrollInner}>down</motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
}

function AnimatedLetters({ title, disabled }) {
  return (
    <motion.span
      className={s.rowTitle}
      initial='initial'
      animate='animate'
      {...(!disabled && a.banner)}
    >
      {[...title].map((letter, index) => (
        <motion.span
          key={index}
          className={s.rowLetter}
          {...(!disabled && a.letters)}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
