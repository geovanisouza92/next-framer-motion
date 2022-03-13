import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import { heroImageLayoutId } from './animations';
import * as a from './Loader.animations';
import s from './Loader.module.scss';

export default function Loader({ className, onFinish }) {
  return (
    <div className={s.loader}>
      <motion.div
        className={s.loaderInner}
        {...a.loaderInner}
        onAnimationComplete={onFinish}
      >
        <ImageBlock src={image1} className={s.image1} {...a.imageBlock} />
        <motion.div className={className} {...a.heroImage}>
          <ImageBlock src={image2} className={s.image2} layoutId={heroImageLayoutId} />
        </motion.div>
        <ImageBlock src={image3} className={s.image3} {...a.imageBlock} />
        <ImageBlock src={image4} className={s.image4} {...a.imageBlock} />
        <ImageBlock src={image5} className={s.image5} {...a.imageBlock} />
      </motion.div>
    </div>
  );
}

function ImageBlock({ src, className, ...props }) {
  return (
    <motion.div className={cn(s.imageBlock, className)} {...props}>
      <Image src={src} alt="image" />
    </motion.div>
  );
}
