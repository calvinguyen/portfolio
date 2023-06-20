import { About, Footer, Header, Skills, Work, Experience } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};
export default App;
