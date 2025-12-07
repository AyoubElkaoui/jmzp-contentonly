import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          <h2>JM Zorgpartners</h2>
        </Link>
        <ul className="nav-links">
          <li><Link href="/zorgprofessionals">Zorgprofessionals</Link></li>
          <li><Link href="/zorginstellingen">Zorginstellingen</Link></li>
          <li><Link href="/vacatures">Vacatures</Link></li>
          <li><Link href="/over-ons">Over Ons</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
