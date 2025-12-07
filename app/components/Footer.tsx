export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>JM Zorgpartners</h3>
            <p>De Juiste Match in zorg</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p><strong>T.</strong> 033 303 30 42</p>
            <p><strong>E.</strong> info@jmzorgpartners.nl</p>
            <p><strong>Spoedlijn:</strong> 06 53 474 474</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="/zorgprofessionals">Zorgprofessionals</a></li>
              <li><a href="/zorginstellingen">Zorginstellingen</a></li>
              <li><a href="/vacatures">Vacatures</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JM Zorgpartners. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
