import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import RickAndMortyCharacters from './components/RickAndMortyCharacters';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails';
import Layout from './components/Layout';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' Component={Layout}>
        <Route index Component={RickAndMortyCharacters}></Route>
        <Route path='/characters/:id' Component={CharacterDetails}></Route>
        </Route>
      </Routes>
    </Router>


   
  );
}

export default App;
