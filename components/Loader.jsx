import cn from 'classnames';
import Image from 'next/image';
import { useEffect } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import s from './Loader.module.scss';

export default function Loader({ className, onFinish }) {
  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 2000);
  }, [onFinish]);

  return (
    <div className={s.loader}>
      <div className={s.loaderInner}>
        <ImageBlock src={image1} className={s.image1} />
        <div className={className}>
          <ImageBlock src={image2} className={s.image2} />
        </div>
        <ImageBlock src={image3} className={s.image3} />
        <ImageBlock src={image4} className={s.image4} />
        <ImageBlock src={image5} className={s.image5} />
      </div>
    </div>
  );
}

function ImageBlock({ src, className }) {
  return (
    <div className={cn(s.imageBlock, className)}>
      <Image
        src={src}
        alt="image"
      />
    </div>
  );
}
