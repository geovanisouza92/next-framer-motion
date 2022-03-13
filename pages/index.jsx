import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import * as a from '../components/Home.animations';
import Loader from '../components/Loader';
import image2 from '../images/image2.jpg';
import s from '../styles/Home.module.scss';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      document.body.classList.remove('loading');
    }
  }, [isLoading]);

  let children;
  if (isLoading) {
    children = (
      <motion.div key="loader">
        <Loader
          className={s.transitionImage}
          onFinish={() => setIsLoading(false)}
        />
      </motion.div>
    );
  } else {
    children = (
      <>
        <Header />
        <Banner />
        <div className={cn(s.transitionImage, s.final)}>
          <motion.div {...a.heroImage}>
            <Image
              src={image2}
              alt="image2"
            />
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <AnimatePresence>{children}</AnimatePresence>
  )
}
