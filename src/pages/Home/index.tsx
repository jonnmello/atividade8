import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <div className="titulo">
          <h1>Desafio Github API</h1>
        </div>
        <div className="subtitulo">
          <h1>Bootcamp Spring React - DevSuperior</h1>
        </div>
      </div>
      <Link to="/githubsearch">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
