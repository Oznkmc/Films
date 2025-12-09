import './App.css'

import { films } from './Data.jsx';
import Films from './Films.jsx';
import './css/Films.css'

function App() {

  return (
    <div className="film-main">
      {films.map((film) => (
        <Films key={film.id} film={film} />
      ))}
    </div>


  )
}
export default App
