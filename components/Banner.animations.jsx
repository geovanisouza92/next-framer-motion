import { custom, easeInOut } from "./animations";

export const banner = {
  variants: {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  },
};

export const message = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: easeInOut(1, 0.4),
};

export const scroll = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  transition: custom(1, 1.8),
};

export const scrollInner = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: easeInOut(1, 1.8),
};

export const title = {
  initial: {
    y: 310,
  },
  animate: {
    y: 0,
  },
  transition: custom(),
};

export const letters = {
  variants: {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: custom(),
    },
  },
};
