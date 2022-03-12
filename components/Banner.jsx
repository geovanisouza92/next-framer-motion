import cn from 'classnames';
import { useEffect, useState } from "react";
import s from './Banner.module.scss';

export default function Banner() {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <div className={s.banner}>
      <BannerRowTop title="brand" />
      <BannerRowCenter title="experience" playMarquee={playMarquee} />
      <BannerRowBottom title="studio" />
    </div>
  );
}

function BannerRowTop({ title }) {
  return (
    <div className={s.bannerRow}>
      <div className={s.rowCol}>
        <AnimatedLetters title={title} />
      </div>
      <div className={s.rowCol}>
        <span className={s.rowMessage}>
          We are specialized in setting up the foundation of your brand and setting you up for success.
        </span>
      </div>
    </div>
  );
}

function BannerRowCenter({ title, playMarquee }) {
  return (
    <div className={cn(s.bannerRow, s.marquee, { [s.animate]: playMarquee })}>
      <div className={s.marqueeInner}>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
}

function BannerRowBottom({ title, disabled }) {
  return (
    <div className={cn(s.bannerRow, s.center)}>
      <div className={s.scroll}>
        <span>scroll</span>
        <span>down</span>
      </div>
      <AnimatedLetters title={title} />
    </div>
  );
}

function AnimatedLetters({ title }) {
  return (
    <span className={s.rowTitle}>
      {[...title].map((letter, index) => (
        <span className={s.rowLetter} key={index}>
          {letter}
        </span>
      ))}
    </span>
  );
}
