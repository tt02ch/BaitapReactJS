import './App.scss';
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { Secition1 } from './components/Section-1';
import { Section2 } from './components/Section-2';
import { Secition3 } from './components/Section-3';
import { Secition4 } from './components/Section-4';
import { Secition5 } from './components/Section-5';
import { Section6 } from './components/Section-6';


function App() {
  return (
    <>
      <Header />
      <Secition1 />
      <Section2 />
      <Secition3 />
      <Secition4 />
      <Secition5 />
      <Section6 />
      <Footer />
    </>
    
  );
  
}

export default App;
