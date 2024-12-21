import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Impressum() {
  return (
    <div>
      <header>
        <nav>
          <h2><a href="/" className="logo text-warning">Taxi Stuttgart</a></h2>
        </nav>
      </header>
      <div className="banner"></div>
      <main className="container my-5">
        <h2>Impressum</h2>
        <p><strong>Taxi Stuttgart</strong></p>
        <p>Max Mustermann</p>
        <p>Musterstraße 1</p>
        <p>70173 Stuttgart</p>
        <p>Deutschland</p>
        <p>Telefon: +49 711 1234567</p>
        <p>E-Mail: info@taxistuttgart.de</p>
        <h3>Vertreten durch:</h3>
        <p>Max Mustermann</p>
        <h3>Umsatzsteuer-ID:</h3>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE123456789</p>
        <h3>Aufsichtsbehörde:</h3>
        <p>Landesamt für Bürger- und Ordnungsangelegenheiten</p>
        <p>Stuttgart</p>
        <h3>Haftungsausschluss:</h3>
        <p>Haftung für Inhalte</p>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
          Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter 
          oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
          des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
          Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
          bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Taxi Stuttgart</p>
        <Link to="/impressum" className="text-white ms-2">Impressum</Link>
        <Link to="/admin" className="text-white ms-2">Admin</Link>
      </footer>
    </div>
  );
}

export default Impressum;