import { easeInOut } from "./animations";

export const header = {
  initial: {
    opacity: 0,
    y: -180,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: easeInOut(1, 0.6),
};
