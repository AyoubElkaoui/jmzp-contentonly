import Link from 'next/link';

export default function Home() {
  return (
    <main className="page-content">
      <div className="container">
        <div className="hero">
          <h1>Welkom bij JM Zorgpartners</h1>
          <p>De Juiste Match in zorg</p>
        </div>
        <nav className="home-nav">
          <Link href="/zorgprofessionals" className="nav-card">
            <h3>Zorgprofessionals</h3>
            <p>Werken in de zorg op jouw manier</p>
          </Link>
          <Link href="/zorginstellingen" className="nav-card">
            <h3>Zorginstellingen</h3>
            <p>Continuïteit in uw zorgorganisatie</p>
          </Link>
          <Link href="/vacatures" className="nav-card">
            <h3>Vacatures</h3>
            <p>Bekijk onze actuele vacatures</p>
          </Link>
        </nav>
      </div>
    </main>
  );
}
