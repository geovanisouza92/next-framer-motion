export const heroImageLayoutId = "heroImage";

export const custom = (duration = 1, delay = null) => ({
  ease: [0.6, 0.01, -0.05, 0.95],
  duration,
  ...(delay !== null && { delay }),
});

export const easeInOut = (duration = 1, delay = null) => ({
  ease: 'easeInOut',
  duration,
  ...(delay !== null && { delay }),
});
