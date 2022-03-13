import { custom, easeInOut } from "./animations";

export const loaderInner = {
  initial: 'hidden',
  animate: 'show',
  exit: 'exit',
  variants: {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  },
};

export const heroImage = {
  variants: {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: custom(1.6),
    },
  },
};

export const imageBlock = {
  variants: {
    ...heroImage.variants,
    exit: {
      opacity: 0,
      y: -200,
      transition: easeInOut(0.8),
    },
  },
};
