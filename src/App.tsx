import './App.css';
import { Header } from './components/header';
import { Wellcome } from './components/wellcome';
import Banner from './assets/banner.png'
import { Presentation } from './components/presentation';
import { HowItWork } from './components/how-it-work';
import { Tokenomics } from './components/tokenomics';
import { Founders } from './components/founders';
import { Roadmap } from './components/roadmap';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{
        background: `url(${Banner})`,
      }}>
        <Wellcome />
        <Presentation />
        <HowItWork />
        <Tokenomics />
        <Founders />
        <Roadmap />
        <Footer />
      </div>
    </div>
  );
}

export default App;
