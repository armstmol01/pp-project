import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Nav data={{active: 'home', message: ''}}/>
      <Header />
      <Footer />
    </>
  );
}

export default App;
