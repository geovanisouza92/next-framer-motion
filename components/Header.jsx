import Link from 'next/link';
import s from './Header.module.scss';

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerInner}>
        <div className={s.logo}>Ollie</div>
        <nav className={s.nav}>
          <li><Link href="/design"><a>Design</a></Link></li>
          <li><Link href="/strategy"><a>Strategy</a></Link></li>
          <li><Link href="/cases"><a>Cases</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/why"><a>Why work with us?</a></Link></li>
        </nav>
        <div className={s.contact}>
          <Link href="/contact"><a>Let&apos;s work together</a></Link>
        </div>
        <div className={s.hamburgerMenu}>
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
