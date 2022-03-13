import { AnimateSharedLayout } from 'framer-motion';
import '../styles/styles.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout type="crossfade">
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}
