import Header from './Header.jsx';
import Films from './Films.jsx';
import { films } from './Data.jsx';
import './css/Films.css';

function App() {
  return (
    <div className="app-container">

      <div className="main-box">

        <Header />

        <div className="film-grid">
          {films.map((film) => (
            <Films key={film.id} film={film} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;