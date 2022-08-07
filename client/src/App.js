import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      <Nav data={{active: 'home', message: ''}}/>
      <Header />
    </>
  );
}

export default App;
