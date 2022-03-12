import cn from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
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

  if (isLoading) {
    return (
      <div>
        <Loader
          className={s.transitionImage}
          onFinish={() => setIsLoading(false)}
        />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Banner />
      {isLoading ? (
        null
      ) : (
        <div className={cn(s.transitionImage, s.final)}>
          <Image
            src={image2}
            alt="image2"
          />
        </div>
      )}
    </>
  )
}
